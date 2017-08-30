const logger = require('../lib/logger')

logger.info('Starting Shinobi ⚡️...')
logger.info('Starting server...')
require('../../server/main').listen(3005, () => {
  logger.success('I\'ll be right by your side till 3005 :)')
})
