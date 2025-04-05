import React from "react";
import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Section = ({
  children,
  id,
  className = "",
  backgroundColor = "bg-white",
  textColor = "text-gray-900",
  padding = "py-12 px-4 sm:px-6 lg:px-8",
  backgroundImage,
  overlayColor = "bg-black",
  overlayOpacity = 0,
  contentAlign = "center",
  width = "contain",
  animation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
  containerStyle = {},
  backgroundStyle = {},
  title,
  subtitle,
  paragraphs = [],
  buttons = [],
}) => {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  const widthClasses = {
    contain: "max-w-7xl mx-auto",
    full: "w-full",
  };

  return (
    <motion.section
      id={id}
      className={`relative ${padding} ${className} ${textColor} overflow-hidden`}
      initial={animation.initial}
      animate={animation.animate}
      transition={animation.transition}
    >
      {/* Background with smooth overlay */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <div
            className={`absolute inset-0 bg-cover bg-center ${backgroundColor}`}
            style={{
              backgroundImage: `url(${backgroundImage})`,
              ...backgroundStyle,
            }}
          />
          <div
            className={`absolute inset-0 ${overlayColor}`}
            style={{ opacity: `${overlayOpacity}%` }}
          />
        </div>
      )}

      {/* Content container */}
      <div className={`relative z-10 ${widthClasses[width]}`}>
        <div
          className={`flex flex-col ${alignmentClasses[contentAlign]}`}
          style={containerStyle}
        >
          {/* Title */}
          {title && (
            <motion.h1
              className={`${
                title.className ||
                "text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight"
              }`}
              style={title.style}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.1,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {title.text}
            </motion.h1>
          )}

          {/* Subtitle */}
          {subtitle && (
            <motion.h2
              className={`${
                subtitle.className ||
                "text-xl sm:text-2xl lg:text-3xl font-normal mt-6 max-w-3xl"
              }`}
              style={subtitle.style}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {subtitle.text}
            </motion.h2>
          )}

          {/* Paragraphs */}
          {paragraphs.map((p, i) => (
            <motion.p
              key={i}
              className={`${
                p.className || "text-lg sm:text-xl mt-6 max-w-2xl"
              }`}
              style={p.style}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.3 + i * 0.1,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {p.text}
            </motion.p>
          ))}

          {/* Buttons */}
          {buttons.length > 0 && (
            <motion.div
              className={`flex ${buttons.length > 1 ? "space-x-4" : ""} mt-8`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.4,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {buttons.map((btn, i) => (
                <motion.button
                  key={i}
                  className={`${
                    btn.className ||
                    "px-8 py-3 text-lg font-medium transition-colors"
                  } ${
                    btn.variant === "primary"
                      ? "bg-indigo-600 text-white hover:bg-indigo-700"
                      : btn.variant === "secondary"
                      ? "bg-transparent text-indigo-600 hover:bg-indigo-50 border border-indigo-600"
                      : ""
                  }`}
                  style={btn.style}
                  onClick={btn.onClick}
                  type={btn.type || "button"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {btn.text}
                </motion.button>
              ))}
            </motion.div>
          )}

          {children}
        </div>
      </div>
    </motion.section>
  );
};

Section.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  className: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  padding: PropTypes.string,
  backgroundImage: PropTypes.string,
  parallax: PropTypes.bool,
  overlayColor: PropTypes.string,
  overlayOpacity: PropTypes.number,
  contentAlign: PropTypes.oneOf(["left", "center", "right"]),
  width: PropTypes.oneOf(["contain", "full"]),
  animation: PropTypes.shape({
    initial: PropTypes.object,
    animate: PropTypes.object,
    transition: PropTypes.object,
  }),
  containerStyle: PropTypes.object,
  backgroundStyle: PropTypes.object,
  title: PropTypes.shape({
    text: PropTypes.node.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
  }),
  subtitle: PropTypes.shape({
    text: PropTypes.node.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
  }),
  paragraphs: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.node.isRequired,
      className: PropTypes.string,
      style: PropTypes.object,
    })
  ),
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      className: PropTypes.string,
      style: PropTypes.object,
      onClick: PropTypes.func,
      type: PropTypes.string,
      variant: PropTypes.oneOf(["primary", "secondary", ""]),
    })
  ),
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      text: PropTypes.string,
      image: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string,
        className: PropTypes.string,
        containerClassName: PropTypes.string,
      }),
      className: PropTypes.string,
      contentClassName: PropTypes.string,
      titleClassName: PropTypes.string,
      textClassName: PropTypes.string,
      buttons: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string.isRequired,
          className: PropTypes.string,
          variant: PropTypes.oneOf(["primary", ""]),
        })
      ),
      style: PropTypes.object,
    })
  ),
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
      className: PropTypes.string,
      containerClassName: PropTypes.string,
      style: PropTypes.object,
      containerStyle: PropTypes.object,
      fullWidth: PropTypes.bool,
      loading: PropTypes.string,
    })
  ),
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      placeholder: PropTypes.string,
      value: PropTypes.string,
      onChange: PropTypes.func,
      className: PropTypes.string,
      style: PropTypes.object,
      label: PropTypes.string,
      labelClassName: PropTypes.string,
    })
  ),
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(["default", "icon"]),
      title: PropTypes.string,
      titleClassName: PropTypes.string,
      className: PropTypes.string,
      listClassName: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          content: PropTypes.node.isRequired,
          className: PropTypes.string,
        })
      ).isRequired,
    })
  ),
  icons: PropTypes.arrayOf(
    PropTypes.shape({
      items: PropTypes.arrayOf(
        PropTypes.shape({
          component: PropTypes.node.isRequired,
          className: PropTypes.string,
        })
      ).isRequired,
    })
  ),
  grid: PropTypes.shape({
    cols: PropTypes.string,
  }),
  flex: PropTypes.bool,
};

export default Section;
