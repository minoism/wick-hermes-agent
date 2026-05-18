(function () {
  "use strict";

  const SDK = window.__HERMES_PLUGIN_SDK__;
  const registry = window.__HERMES_PLUGINS__;
  if (!SDK || !registry) return;

  const React = SDK.React;
  const h = React.createElement;
  const C = SDK.components;

  function ExampleDashboard() {
    return h(
      C.Card,
      null,
      h(C.CardHeader, null, h(C.CardTitle, null, "Example dashboard plugin")),
      h(
        C.CardContent,
        null,
        h(
          "p",
          { style: { margin: 0, color: "var(--muted-foreground)" } },
          "This bundled plugin keeps dashboard plugin API auth coverage visible.",
        ),
      ),
    );
  }

  registry.register("example", ExampleDashboard);
})();
