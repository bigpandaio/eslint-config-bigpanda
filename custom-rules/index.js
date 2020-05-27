// eslint/index.js
module.exports = {
  rules: {
    'no-constant-ft': {
      create: function (context) {
        return {
          VariableDeclaration(node) {
            if (node.declarations[0].type === 'VariableDeclarator') {
              const name = node.declarations[0].id && node.declarations[0].id.name;
              if (typeof name === 'string' && name.endsWith('FT')) {
                const type = node.declarations[0].init && node.declarations[0].init.type;
                const value = node.declarations[0].init && node.declarations[0].init.value;
                if (type === 'Literal' || value === true) {
                  context.report({
                    node,
                    message: 'Do not set Feture Toggle as constant'
                  });
                }
              }
            }
          }
        };
      }
    }
  }
};
