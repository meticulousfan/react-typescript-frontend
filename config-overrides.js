const { override, fixBabelImports, addBabelPlugins, addLessLoader } = require('customize-cra')

module.exports = override(
    ...addBabelPlugins('emotion'),
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            'font-family': 'Lato, Helvetica, Open Sans, sans-serif',
            'font-size-base': '16px',
            'primary-color': '#059bff',
            'link-color': '#059bff',
            'link-hover-color': '#059bff',
            'heading-1-size': '2.5rem',
            'heading-2-size': '1.85rem',
            'heading-3-size': '1.2rem',
            'heading-4-size': '1rem',
        },
    }),
)
