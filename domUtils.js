const domUtils = (() => {
  const setAttributes = (element, attributes) => {
    for (var key in attributes) element.setAttribute(key, attributes[key]);
  };

  const getMainContainer = (type) =>
    getContainer("ts-" + type + "-container ts-main-container");

  const getContainer = (className) => {
    let container = document.createElement("div");
    domUtils.setAttributes(container, {
      class: className,
    });
    return container;
  };

  const getRemoveIcon = () => {
    let taskRemoveIconSVG = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
      ),
      taskRemoveIconTop = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      ),
      taskRemoveIconBottom = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );

    setAttributes(taskRemoveIconSVG, { viewbox: "0 0 32 32" });
    setAttributes(taskRemoveIconTop, {
      class: "ts-remove-icon ts-remove-icon-top",
    });
    setAttributes(taskRemoveIconBottom, {
      class: "ts-remove-icon  ts-remove-icon-bottom",
    });
    taskRemoveIconSVG.appendChild(taskRemoveIconTop);
    taskRemoveIconSVG.appendChild(taskRemoveIconBottom);
    return taskRemoveIconSVG;
  };

  const getActionButton = (type) => {
    let button = document.createElement("button");
    setAttributes(button, {
      class: "ts-" + type + "-btn ts-action-btn",
    });
    return button;
  };

  return {
    setAttributes: setAttributes,
    getMainContainer: getMainContainer,
    getContainer: getContainer,
    getRemoveIcon: getRemoveIcon,
    getActionButton: getActionButton,
  };
})();
