import 'colors'
import 'dotenv/config'
import express from 'express'

import authRoutes from './app/auth/auth.routes.js'

const app = express()

async function main() {
	const PORT = process.env.PORT

	if (!PORT) {
		console.error('Error: PORT environment variable is not defined'.red.bold)
		process.exit(1)
	}

	if (process.env.NODE_ENV === 'development') {
		const { default: morgan } = await import('morgan')
		app.use(morgan('dev'))
	}

	app.use(express.json())

	app.get('/', (req, res) => {
		res.json({ message: 'API is running' })
	})

	app.use('/api/auth', authRoutes)

	app.listen(PORT, () => {
		console.log(
			`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.green
				.bold
		)
	})
}

main()
