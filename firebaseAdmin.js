var admin = require('firebase-admin')

const serviceAccount = require('./firebase-secret.json')

export const verifyIdToken = token => {
  if (!admin.app.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    })
  }

  return admin
    .auth()
    .verifyIdToken(token)
    .catch(error => {
      throw error
    })
}
