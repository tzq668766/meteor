Package.describe({
  summary: "JavaScript code analysis for Meteor"
});

// Use some packages from the Esprima project.  If it turns out we need these on
// the client too, can copy them in (or implement a way to serve files out of
// Npm modules).
Npm.depends({
  // This code was originally written against the unreleased 1.1 branch. We can
  // probably switch to a built NPM version when it gets released.
  esprima: "https://github.com/ariya/esprima/tarball/5044b87f94fb802d9609f1426c838874ec2007b3",
  estraverse: "1.1.2-1",
  escope: "0.0.14"
});

// This package may not depend on ANY other Meteor packages, even in the test
// slice. (Tests for this package are in the js-analyze-tests package.) This is
// because it is used by the linker; the linker is smart enough not to try to
// apply it to itself, but it cannot depend on any other packages or else it
// would be impossible to load at link time (or all transitive dependencies
// packages would need to function without the analysis provided by this
// package).
Package.on_use(function (api, where) {
  api.add_files('js_analyze.js', 'server');
});
