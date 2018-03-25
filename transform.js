const path = require('path');

module.exports = function(fileInfo, api, options) {
  const { source } = fileInfo;
  const regex = / from '\//g;

  if (source.match(regex)) {
    const splittedSource = source.split('\n');

    const filePath = fileInfo.path.substring(
      fileInfo.path.indexOf('/imports'),
      fileInfo.path.lastIndexOf('/')
    );

    const output = splittedSource.map(line => {
      if (line.match(regex)) {
        const toPath = line.substring(
          line.indexOf("'") + 1,
          line.lastIndexOf("'")
        );

        let relPath = path.relative(filePath, toPath);
        if (!relPath.startsWith('..')) relPath = `./${relPath}`;

        return line.replace(toPath, relPath);
      }

      return line;
    });

    return output.join('\n');
  }

  return source;
};
