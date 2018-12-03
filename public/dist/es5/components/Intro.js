"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

module.exports = function (props) {
  return React.createElement(
    "div",
    { className: "page-main" },
    React.createElement(
      "div",
      { className: "header py-4" },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "div",
          { className: "d-flex" },
          React.createElement(
            "a",
            { className: "header-brand", href: "./index.html" },
            React.createElement("img", {
              src: "./public/demo/brand/tabler.svg",
              className: "header-brand-img",
              alt: "tabler logo"
            })
          ),
          React.createElement(
            "div",
            { className: "d-flex order-lg-2 ml-auto" },
            React.createElement(
              "div",
              { className: "nav-item d-none d-md-flex" },
              React.createElement(
                "a",
                {
                  href: "https://github.com/tabler/tabler",
                  className: "btn btn-sm btn-outline-primary",
                  target: "_blank"
                },
                "Source code"
              )
            ),
            React.createElement(
              "div",
              { className: "dropdown d-none d-md-flex" },
              React.createElement(
                "a",
                { className: "nav-link icon", "data-toggle": "dropdown" },
                React.createElement("i", { className: "fe fe-bell" }),
                React.createElement("span", { className: "nav-unread" })
              ),
              React.createElement(
                "div",
                { className: "dropdown-menu dropdown-menu-right dropdown-menu-arrow" },
                React.createElement(
                  "a",
                  { href: "#", className: "dropdown-item d-flex" },
                  React.createElement("span", {
                    className: "avatar mr-3 align-self-center",
                    style: { backgroundImage: "url(demo/faces/male/41.jpg)" }
                  }),
                  React.createElement(
                    "div",
                    null,
                    React.createElement(
                      "strong",
                      null,
                      "Nathan"
                    ),
                    " pushed new commit: Fix page load performance issue.",
                    React.createElement(
                      "div",
                      { className: "small text-muted" },
                      "10 minutes ago"
                    )
                  )
                ),
                React.createElement(
                  "a",
                  { href: "#", className: "dropdown-item d-flex" },
                  React.createElement("span", {
                    className: "avatar mr-3 align-self-center",
                    style: { backgroundImage: "url(demo/faces/female/1.jpg" }
                  }),
                  React.createElement(
                    "div",
                    null,
                    React.createElement(
                      "strong",
                      null,
                      "Alice"
                    ),
                    " started new task: Tabler UI design.",
                    React.createElement(
                      "div",
                      { className: "small text-muted" },
                      "1 hour ago"
                    )
                  )
                ),
                React.createElement(
                  "a",
                  { href: "#", className: "dropdown-item d-flex" },
                  React.createElement("span", {
                    className: "avatar mr-3 align-self-center",
                    style: {
                      backgroundImage: "url(demo/faces/female/18.jpg"
                    }
                  }),
                  React.createElement(
                    "div",
                    null,
                    React.createElement(
                      "strong",
                      null,
                      "Rose"
                    ),
                    " deployed new version of NodeJS REST Api V3",
                    React.createElement(
                      "div",
                      { className: "small text-muted" },
                      "2 hours ago"
                    )
                  )
                ),
                React.createElement("div", { className: "dropdown-divider" }),
                React.createElement(
                  "a",
                  {
                    href: "#",
                    className: "dropdown-item text-center text-muted-dark"
                  },
                  "Mark all as read"
                )
              )
            ),
            React.createElement(
              "div",
              { className: "dropdown" },
              React.createElement(
                "a",
                {
                  href: "#",
                  className: "nav-link pr-0 leading-none",
                  "data-toggle": "dropdown"
                },
                React.createElement("span", {
                  className: "avatar",
                  style: { backgroundImage: "url(demo/faces/female/25.jpg" }
                }),
                React.createElement(
                  "span",
                  { className: "ml-2 d-none d-lg-block" },
                  React.createElement(
                    "span",
                    { className: "text-default" },
                    "Jane Pearson"
                  ),
                  React.createElement(
                    "small",
                    { className: "text-muted d-block mt-1" },
                    "Administrator"
                  )
                )
              ),
              React.createElement(
                "div",
                { className: "dropdown-menu dropdown-menu-right dropdown-menu-arrow" },
                React.createElement(
                  "a",
                  { className: "dropdown-item", href: "#" },
                  React.createElement("i", { className: "dropdown-icon fe fe-user" }),
                  " Profile"
                ),
                React.createElement(
                  "a",
                  { className: "dropdown-item", href: "#" },
                  React.createElement("i", { className: "dropdown-icon fe fe-settings" }),
                  " Settings"
                ),
                React.createElement(
                  "a",
                  { className: "dropdown-item", href: "#" },
                  React.createElement(
                    "span",
                    { className: "float-right" },
                    React.createElement(
                      "span",
                      { className: "badge badge-primary" },
                      "6"
                    )
                  ),
                  React.createElement("i", { className: "dropdown-icon fe fe-mail" }),
                  " Inbox"
                ),
                React.createElement(
                  "a",
                  { className: "dropdown-item", href: "#" },
                  React.createElement("i", { className: "dropdown-icon fe fe-send" }),
                  " Message"
                ),
                React.createElement("div", { className: "dropdown-divider" }),
                React.createElement(
                  "a",
                  { className: "dropdown-item", href: "#" },
                  React.createElement("i", { className: "dropdown-icon fe fe-help-circle" }),
                  " Need help?"
                ),
                React.createElement(
                  "a",
                  { className: "dropdown-item", href: "#" },
                  React.createElement("i", { className: "dropdown-icon fe fe-log-out" }),
                  " Sign out"
                )
              )
            )
          ),
          React.createElement(
            "a",
            {
              href: "#",
              className: "header-toggler d-lg-none ml-3 ml-lg-0",
              "data-toggle": "collapse",
              "data-target": "#headerMenuCollapse"
            },
            React.createElement("span", { className: "header-toggler-icon" })
          )
        )
      )
    ),
    React.createElement(
      "div",
      { className: "header collapse d-lg-flex p-0", id: "headerMenuCollapse" },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "div",
          { className: "row align-items-center" },
          React.createElement(
            "div",
            { className: "col-lg-3 ml-auto" },
            React.createElement(
              "form",
              { className: "input-icon my-3 my-lg-0" },
              React.createElement("input", {
                type: "search",
                className: "form-control header-search",
                placeholder: "Search",
                tabindex: "1"
              }),
              React.createElement(
                "div",
                { className: "input-icon-addon" },
                React.createElement("i", { className: "fe fe-search" })
              )
            )
          ),
          React.createElement(
            "div",
            { className: "col-lg order-lg-first" },
            React.createElement(
              "ul",
              { className: "nav nav-tabs border-0 flex-column flex-lg-row" },
              React.createElement(
                "li",
                { className: "nav-item" },
                React.createElement(
                  "a",
                  { href: "./index.html", className: "nav-link" },
                  React.createElement("i", { className: "fe fe-home" }),
                  " Home"
                )
              ),
              React.createElement(
                "li",
                { className: "nav-item" },
                React.createElement(
                  "a",
                  {
                    href: "javascript:void(0)",
                    className: "nav-link",
                    "data-toggle": "dropdown"
                  },
                  React.createElement("i", { className: "fe fe-box" }),
                  " Interface"
                ),
                React.createElement(
                  "div",
                  { className: "dropdown-menu dropdown-menu-arrow" },
                  React.createElement(
                    "a",
                    { href: "./cards.html", className: "dropdown-item " },
                    "Cards design"
                  ),
                  React.createElement(
                    "a",
                    { href: "./charts.html", className: "dropdown-item " },
                    "Charts"
                  ),
                  React.createElement(
                    "a",
                    { href: "./pricing-cards.html", className: "dropdown-item " },
                    "Pricing cards"
                  )
                )
              ),
              React.createElement(
                "li",
                { className: "nav-item dropdown" },
                React.createElement(
                  "a",
                  {
                    href: "javascript:void(0)",
                    className: "nav-link",
                    "data-toggle": "dropdown"
                  },
                  React.createElement("i", { className: "fe fe-calendar" }),
                  " Components"
                ),
                React.createElement(
                  "div",
                  { className: "dropdown-menu dropdown-menu-arrow" },
                  React.createElement(
                    "a",
                    { href: "./maps.html", className: "dropdown-item " },
                    "Maps"
                  ),
                  React.createElement(
                    "a",
                    { href: "./icons.html", className: "dropdown-item " },
                    "Icons"
                  ),
                  React.createElement(
                    "a",
                    { href: "./store.html", className: "dropdown-item " },
                    "Store"
                  ),
                  React.createElement(
                    "a",
                    { href: "./blog.html", className: "dropdown-item " },
                    "Blog"
                  ),
                  React.createElement(
                    "a",
                    { href: "./carousel.html", className: "dropdown-item " },
                    "Carousel"
                  )
                )
              ),
              React.createElement(
                "li",
                { className: "nav-item dropdown" },
                React.createElement(
                  "a",
                  {
                    href: "javascript:void(0)",
                    className: "nav-link active",
                    "data-toggle": "dropdown"
                  },
                  React.createElement("i", { className: "fe fe-file" }),
                  " Pages"
                ),
                React.createElement(
                  "div",
                  { className: "dropdown-menu dropdown-menu-arrow" },
                  React.createElement(
                    "a",
                    { href: "./profile.html", className: "dropdown-item active" },
                    "Profile"
                  ),
                  React.createElement(
                    "a",
                    { href: "./login.html", className: "dropdown-item " },
                    "Login"
                  ),
                  React.createElement(
                    "a",
                    { href: "./register.html", className: "dropdown-item " },
                    "Register"
                  ),
                  React.createElement(
                    "a",
                    { href: "./forgot-password.html", className: "dropdown-item " },
                    "Forgot password"
                  ),
                  React.createElement(
                    "a",
                    { href: "./400.html", className: "dropdown-item " },
                    "400 error"
                  ),
                  React.createElement(
                    "a",
                    { href: "./401.html", className: "dropdown-item " },
                    "401 error"
                  ),
                  React.createElement(
                    "a",
                    { href: "./403.html", className: "dropdown-item " },
                    "403 error"
                  ),
                  React.createElement(
                    "a",
                    { href: "./404.html", className: "dropdown-item " },
                    "404 error"
                  ),
                  React.createElement(
                    "a",
                    { href: "./500.html", className: "dropdown-item " },
                    "500 error"
                  ),
                  React.createElement(
                    "a",
                    { href: "./503.html", className: "dropdown-item " },
                    "503 error"
                  ),
                  React.createElement(
                    "a",
                    { href: "./email.html", className: "dropdown-item " },
                    "Email"
                  ),
                  React.createElement(
                    "a",
                    { href: "./empty.html", className: "dropdown-item " },
                    "Empty page"
                  ),
                  React.createElement(
                    "a",
                    { href: "./rtl.html", className: "dropdown-item " },
                    "RTL mode"
                  )
                )
              ),
              React.createElement(
                "li",
                { className: "nav-item dropdown" },
                React.createElement(
                  "a",
                  { href: "./form-elements.html", className: "nav-link" },
                  React.createElement("i", { className: "fe fe-check-square" }),
                  " Forms"
                )
              ),
              React.createElement(
                "li",
                { className: "nav-item" },
                React.createElement(
                  "a",
                  { href: "./gallery.html", className: "nav-link" },
                  React.createElement("i", { className: "fe fe-image" }),
                  " Gallery"
                )
              ),
              React.createElement(
                "li",
                { className: "nav-item" },
                React.createElement(
                  "a",
                  { href: "./docs/index.html", className: "nav-link" },
                  React.createElement("i", { className: "fe fe-file-text" }),
                  " Documentation"
                )
              )
            )
          )
        )
      )
    ),
    React.createElement(
      "div",
      { className: "my-3 my-md-5" },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "div",
            { className: "col-lg-4" },
            React.createElement(
              "div",
              { className: "card card-profile" },
              React.createElement("div", {
                className: "card-header",
                style: {
                  backgroundImage: "url(demo/photos/eberhard-grossgasteiger-311213-500.jpg)"
                }
              }),
              React.createElement(
                "div",
                { className: "card-body text-center" },
                React.createElement("img", {
                  className: "card-profile-img",
                  src: "demo/faces/male/16.jpg"
                }),
                React.createElement(
                  "h3",
                  { className: "mb-3" },
                  "Peter Richards"
                ),
                React.createElement(
                  "p",
                  { className: "mb-4" },
                  "Big belly rude boy, million dollar hustler. Unemployed."
                ),
                React.createElement(
                  "button",
                  { className: "btn btn-outline-primary btn-sm" },
                  React.createElement("span", { className: "fa fa-twitter" }),
                  " Follow"
                )
              )
            ),
            React.createElement(
              "div",
              { className: "card" },
              React.createElement(
                "div",
                { className: "card-body" },
                React.createElement(
                  "div",
                  { className: "media" },
                  React.createElement("span", {
                    className: "avatar avatar-xxl mr-5",
                    style: { backgroundImage: "url(demo/faces/male/21.jpg)" }
                  }),
                  React.createElement(
                    "div",
                    { className: "media-body" },
                    React.createElement(
                      "h4",
                      { className: "m-0" },
                      "Juan Hernandez"
                    ),
                    React.createElement(
                      "p",
                      { className: "text-muted mb-0" },
                      "Webdeveloper"
                    ),
                    React.createElement(
                      "ul",
                      { className: "social-links list-inline mb-0 mt-2" },
                      React.createElement(
                        "li",
                        { className: "list-inline-item" },
                        React.createElement(
                          "a",
                          {
                            href: "javascript:void(0)",
                            title: "Facebook",
                            "data-toggle": "tooltip"
                          },
                          React.createElement("i", { className: "fa fa-facebook" })
                        )
                      ),
                      React.createElement(
                        "li",
                        { className: "list-inline-item" },
                        React.createElement(
                          "a",
                          {
                            href: "javascript:void(0)",
                            title: "Twitter",
                            "data-toggle": "tooltip"
                          },
                          React.createElement("i", { className: "fa fa-twitter" })
                        )
                      ),
                      React.createElement(
                        "li",
                        { className: "list-inline-item" },
                        React.createElement(
                          "a",
                          {
                            href: "javascript:void(0)",
                            title: "1234567890",
                            "data-toggle": "tooltip"
                          },
                          React.createElement("i", { className: "fa fa-phone" })
                        )
                      ),
                      React.createElement(
                        "li",
                        { className: "list-inline-item" },
                        React.createElement(
                          "a",
                          {
                            href: "javascript:void(0)",
                            title: "@skypename",
                            "data-toggle": "tooltip"
                          },
                          React.createElement("i", { className: "fa fa-skype" })
                        )
                      )
                    )
                  )
                )
              )
            ),
            React.createElement(
              "div",
              { className: "card" },
              React.createElement(
                "div",
                { className: "card-header" },
                React.createElement(
                  "h3",
                  { className: "card-title" },
                  "My Profile"
                )
              ),
              React.createElement(
                "div",
                { className: "card-body" },
                React.createElement(
                  "form",
                  null,
                  React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                      "div",
                      { className: "col-auto" },
                      React.createElement("span", {
                        className: "avatar avatar-xl",
                        style: {
                          backgroundImage: "url(demo/faces/female/9.jpg)"
                        }
                      })
                    ),
                    React.createElement(
                      "div",
                      { className: "col" },
                      React.createElement(
                        "div",
                        { className: "form-group" },
                        React.createElement(
                          "label",
                          { className: "form-label" },
                          "Email-Address"
                        ),
                        React.createElement("input", {
                          className: "form-control",
                          placeholder: "your-email@domain.com"
                        })
                      )
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "form-group" },
                    React.createElement(
                      "label",
                      { className: "form-label" },
                      "Bio"
                    ),
                    React.createElement(
                      "textarea",
                      { className: "form-control", rows: "5" },
                      "Big belly rude boy, million dollar hustler. Unemployed."
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "form-group" },
                    React.createElement(
                      "label",
                      { className: "form-label" },
                      "Email-Address"
                    ),
                    React.createElement("input", {
                      className: "form-control",
                      placeholder: "your-email@domain.com"
                    })
                  ),
                  React.createElement(
                    "div",
                    { className: "form-group" },
                    React.createElement(
                      "label",
                      { className: "form-label" },
                      "Password"
                    ),
                    React.createElement("input", {
                      type: "password",
                      className: "form-control",
                      value: "password"
                    })
                  ),
                  React.createElement(
                    "div",
                    { className: "form-footer" },
                    React.createElement(
                      "button",
                      { className: "btn btn-primary btn-block" },
                      "Save"
                    )
                  )
                )
              )
            )
          ),
          React.createElement(
            "div",
            { className: "col-lg-8" },
            React.createElement(
              "div",
              { className: "card" },
              React.createElement(
                "div",
                { className: "card-header" },
                React.createElement(
                  "div",
                  { className: "input-group" },
                  React.createElement("input", {
                    type: "text",
                    className: "form-control",
                    placeholder: "Message"
                  }),
                  React.createElement(
                    "div",
                    { className: "input-group-append" },
                    React.createElement(
                      "button",
                      { type: "button", className: "btn btn-secondary" },
                      React.createElement("i", { className: "fe fe-camera" })
                    )
                  )
                )
              ),
              React.createElement(
                "ul",
                { className: "list-group card-list-group" },
                React.createElement(
                  "li",
                  { className: "list-group-item py-5" },
                  React.createElement(
                    "div",
                    { className: "media" },
                    React.createElement("div", {
                      className: "media-object avatar avatar-md mr-4",
                      style: {
                        backgroundImage: "url(demo/faces/male/16.jpg)"
                      }
                    }),
                    React.createElement(
                      "div",
                      { className: "media-body" },
                      React.createElement(
                        "div",
                        { className: "media-heading" },
                        React.createElement(
                          "small",
                          { className: "float-right text-muted" },
                          "4 min"
                        ),
                        React.createElement(
                          "h5",
                          null,
                          "Peter Richards"
                        )
                      ),
                      React.createElement(
                        "div",
                        null,
                        "Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                      ),
                      React.createElement(
                        "ul",
                        { className: "media-list" },
                        React.createElement(
                          "li",
                          { className: "media mt-4" },
                          React.createElement("div", {
                            className: "media-object avatar mr-4",
                            style: {
                              backgroundImage: "url(demo/faces/female/17.jpg)"
                            }
                          }),
                          React.createElement(
                            "div",
                            { className: "media-body" },
                            React.createElement(
                              "strong",
                              null,
                              "Debra Beck: "
                            ),
                            "Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis."
                          )
                        ),
                        React.createElement(
                          "li",
                          { className: "media mt-4" },
                          React.createElement("div", {
                            className: "media-object avatar mr-4",
                            style: {
                              backgroundImage: "url(demo/faces/male/32.jpg)"
                            }
                          }),
                          React.createElement(
                            "div",
                            { className: "media-body" },
                            React.createElement(
                              "strong",
                              null,
                              "Jack Ruiz: "
                            ),
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."
                          )
                        )
                      )
                    )
                  )
                ),
                React.createElement(
                  "li",
                  { className: "list-group-item py-5" },
                  React.createElement(
                    "div",
                    { className: "media" },
                    React.createElement("div", {
                      className: "media-object avatar avatar-md mr-4",
                      style: {
                        backgroundImage: "url(demo/faces/male/16.jpg)"
                      }
                    }),
                    React.createElement(
                      "div",
                      { className: "media-body" },
                      React.createElement(
                        "div",
                        { className: "media-heading" },
                        React.createElement(
                          "small",
                          { className: "float-right text-muted" },
                          "12 min"
                        ),
                        React.createElement(
                          "h5",
                          null,
                          "Peter Richards"
                        )
                      ),
                      React.createElement(
                        "div",
                        null,
                        "Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                      )
                    )
                  )
                ),
                React.createElement(
                  "li",
                  { className: "list-group-item py-5" },
                  React.createElement(
                    "div",
                    { className: "media" },
                    React.createElement("div", {
                      className: "media-object avatar avatar-md mr-4",
                      style: {
                        backgroundImage: "url(demo/faces/male/16.jpg)"
                      }
                    }),
                    React.createElement(
                      "div",
                      { className: "media-body" },
                      React.createElement(
                        "div",
                        { className: "media-heading" },
                        React.createElement(
                          "small",
                          { className: "float-right text-muted" },
                          "34 min"
                        ),
                        React.createElement(
                          "h5",
                          null,
                          "Peter Richards"
                        )
                      ),
                      React.createElement(
                        "div",
                        null,
                        "Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui."
                      ),
                      React.createElement(
                        "ul",
                        { className: "media-list" },
                        React.createElement(
                          "li",
                          { className: "media mt-4" },
                          React.createElement("div", {
                            className: "media-object avatar mr-4",
                            style: {
                              backgroundImage: "url(demo/faces/male/26.jpg)"
                            }
                          }),
                          React.createElement(
                            "div",
                            { className: "media-body" },
                            React.createElement(
                              "strong",
                              null,
                              "Wayne Holland: "
                            ),
                            "Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis."
                          )
                        )
                      )
                    )
                  )
                )
              )
            ),
            React.createElement(
              "form",
              { className: "card" },
              React.createElement(
                "div",
                { className: "card-body" },
                React.createElement(
                  "h3",
                  { className: "card-title" },
                  "Edit Profile"
                ),
                React.createElement(
                  "div",
                  { className: "row" },
                  React.createElement(
                    "div",
                    { className: "col-md-5" },
                    React.createElement(
                      "div",
                      { className: "form-group" },
                      React.createElement(
                        "label",
                        { className: "form-label" },
                        "Company"
                      ),
                      React.createElement("input", {
                        type: "text",
                        className: "form-control",
                        disabled: "",
                        placeholder: "Company",
                        value: "Creative Code Inc."
                      })
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "col-sm-6 col-md-3" },
                    React.createElement(
                      "div",
                      { className: "form-group" },
                      React.createElement(
                        "label",
                        { className: "form-label" },
                        "Username"
                      ),
                      React.createElement("input", {
                        type: "text",
                        className: "form-control",
                        placeholder: "Username",
                        value: "michael23"
                      })
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "col-sm-6 col-md-4" },
                    React.createElement(
                      "div",
                      { className: "form-group" },
                      React.createElement(
                        "label",
                        { className: "form-label" },
                        "Email address"
                      ),
                      React.createElement("input", {
                        type: "email",
                        className: "form-control",
                        placeholder: "Email"
                      })
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "col-sm-6 col-md-6" },
                    React.createElement(
                      "div",
                      { className: "form-group" },
                      React.createElement(
                        "label",
                        { className: "form-label" },
                        "First Name"
                      ),
                      React.createElement("input", {
                        type: "text",
                        className: "form-control",
                        placeholder: "Company",
                        value: "Chet"
                      })
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "col-sm-6 col-md-6" },
                    React.createElement(
                      "div",
                      { className: "form-group" },
                      React.createElement(
                        "label",
                        { className: "form-label" },
                        "Last Name"
                      ),
                      React.createElement("input", {
                        type: "text",
                        className: "form-control",
                        placeholder: "Last Name",
                        value: "Faker"
                      })
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "col-md-12" },
                    React.createElement(
                      "div",
                      { className: "form-group" },
                      React.createElement(
                        "label",
                        { className: "form-label" },
                        "Address"
                      ),
                      React.createElement("input", {
                        type: "text",
                        className: "form-control",
                        placeholder: "Home Address",
                        value: "Melbourne, Australia"
                      })
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "col-sm-6 col-md-4" },
                    React.createElement(
                      "div",
                      { className: "form-group" },
                      React.createElement(
                        "label",
                        { className: "form-label" },
                        "City"
                      ),
                      React.createElement("input", {
                        type: "text",
                        className: "form-control",
                        placeholder: "City",
                        value: "Melbourne"
                      })
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "col-sm-6 col-md-3" },
                    React.createElement(
                      "div",
                      { className: "form-group" },
                      React.createElement(
                        "label",
                        { className: "form-label" },
                        "Postal Code"
                      ),
                      React.createElement("input", {
                        type: "number",
                        className: "form-control",
                        placeholder: "ZIP Code"
                      })
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "col-md-5" },
                    React.createElement(
                      "div",
                      { className: "form-group" },
                      React.createElement(
                        "label",
                        { className: "form-label" },
                        "Country"
                      ),
                      React.createElement(
                        "select",
                        { className: "form-control custom-select" },
                        React.createElement(
                          "option",
                          { value: "" },
                          "Germany"
                        )
                      )
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "col-md-12" },
                    React.createElement(
                      "div",
                      { className: "form-group mb-0" },
                      React.createElement(
                        "label",
                        { className: "form-label" },
                        "About Me"
                      ),
                      React.createElement(
                        "textarea",
                        {
                          rows: "5",
                          className: "form-control",
                          placeholder: "Here can be your description",
                          value: "Mike"
                        },
                        "Here is a little about me...."
                      )
                    )
                  )
                )
              ),
              React.createElement(
                "div",
                { className: "card-footer text-right" },
                React.createElement(
                  "button",
                  { type: "submit", className: "btn btn-primary" },
                  "Update Profile"
                )
              )
            )
          )
        )
      )
    )
  );
};