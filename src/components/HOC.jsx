import React from "react";

const withBackButton = (Component, requiresBackButton = false) => {
  return function(props) {
    return (
      <div>
        {!requiresBackButton ? (
          <Component {...props} />
        ) : (
          <Component {...props} requiresBackButton={requiresBackButton} />
        )}
      </div>
    );
  };
};

export default withBackButton;
