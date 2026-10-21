import 'colors'
import 'dotenv/config'
import express from 'express'

const app = express()

async function main() {
	const PORT = process.env.PORT

	if (!PORT) {
		console.error('Error: PORT environment variable is not defined'.red.bold)
		process.exit(1)
	}

	app.use(express.json())

	app.get('/', (req, res) => {
		res.json({ message: 'API is running' })
	})

	app.listen(PORT, () => {
		console.log(
			`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.green
				.bold
		)
	})
}

main()
