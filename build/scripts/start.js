const logger = require('../lib/logger')

logger.info('Starting Shinobi ⚡️...')
logger.info('Starting server...')
require('../../server/main').listen(3000, () => {
  logger.success('Server running at localhost:3000')
})
