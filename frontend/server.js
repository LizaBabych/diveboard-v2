const { https } = require('firebase-functions')
const { default: next } = require('next')

const isDev = process.env.NODE_ENV !== 'production'

const server = next({
    dev: isDev,
    conf: { distDir: '.next',
        images: {
            domains: ['firebasestorage.googleapis.com'],
        }}
})

const nextjsHandle = server.getRequestHandler();

exports.nextServer = https.onRequest((req, res) => {
    return server.prepare().
    then(() => {
        return nextjsHandle(req, res)
    })
})
