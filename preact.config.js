import { resolve } from 'path'

export default {
	/**
	 * Function that mutates the original webpack config.
	 * Supports asynchronous changes when a promise is returned (or it's an async function).
	 *
	 * @param {object} config - original webpack config.
	 * @param {object} env - options passed to the CLI.
	 * @param {WebpackConfigHelpers} helpers - object with useful helpers for working with the webpack config.
	 * @param {object} options - this is mainly relevant for plugins (will always be empty in the config), default to an empty object
	 **/
	webpack(config, env, helpers, options) {
		config.resolve.modules.push(env.src)
		// eslint-disable-next-line no-undef
		// config.resolve.alias['preact-cli-entrypoint'] = resolve(process.cwd(), 'src', 'index')

		config.resolve.alias['react'] = 'preact/compat'
		config.resolve.alias['react-dom/test-utils'] = 'preact/test-utils'
		config.resolve.alias['react-dom'] = 'preact/compat'
		config.resolve.alias['react/jsx-runtime'] = 'preact/jsx-runtime'

		config.module.rules[4].use.splice(1, 0, {
			loader: '@teamsupercell/typings-for-css-modules-loader',
			options: {
				banner: '// This file is automatically generated from your CSS. Any edits will be overwritten.',
				disableLocalsExport: true,
			},
		})

		config.module.rules.push({
			test: /\.(png|jpe?g|gif|jp2|webp)$/,
			loader: 'file-loader',
			options: {
				name: 'common/images/[name].[ext]',
			},
		})
	},
}
