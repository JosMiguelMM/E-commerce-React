import PropTypes from "prop-types";

export default function Layout({ title, children }) {
  return (
    <div className="flex flex-col mt-20 items-center">
      <h1>{title}</h1>
      {children}
    </div>
  );
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children:PropTypes.node
};
