const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')

const SECRET_KEY = 'your-secret-key'
const expiresIn = '5m'

// Função para criar o token JWT
function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn })
}

// Função para verificar o token JWT
function verifyToken(token) {
  try {
    return jwt.verify(token, SECRET_KEY)
  } catch (err) {
    return false
  }
}

// Função para verificar se o usuário existe
function isAuthenticated({ username, password }) {
  const userdb = router.db.get('users').value()
  return (
    userdb.findIndex(
      user => user.username === username && user.password === password
    ) !== -1
  )
}

server.use(middlewares)
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

// Rota para login
server.post('/auth/login', (req, res) => {
  const { username, password } = req.body
  if (!isAuthenticated({ username, password })) {
    const status = 401
    const message =
      'Ops! Parece que você digitou o Konami Code errado. Verifique o usuário e a senha!'
    res.status(status).json({ status, message })
    return
  }
  const access_token = createToken({ username })
  res.status(200).json({ access_token })
})

// Middleware para verificar o token em todas as outras rotas
server.use((req, res, next) => {
  if (req.path === '/auth/login') {
    next()
  } else {
    if (
      !req.headers.authorization ||
      req.headers.authorization.split(' ')[0] !== 'Bearer'
    ) {
      const status = 401
      const message =
        '🚫 Erro no formato de autorização! Parece que você usou a magia errada. Verifique os feitiços (códigos) e tente de novo.'
      res.status(status).json({ status, message })
      return
    }
    const token = req.headers.authorization.split(' ')[1]
    const verified = verifyToken(token)
    if (!verified) {
      const status = 401
      const message =
        'Token de acesso não fornecido ou inválido 🚫 A chave para o multiverso está faltando! 🔑🌌'
      res.status(status).json({ status, message })
      return
    }
    next()
  }
})

server.use(router)

server.listen(3000, () => {
  console.log(
    '🎉 Boa! Seu JSON-Server está vivo e chutando na porta 3000! 🚀 Vamos codar como se não houvesse amanhã! 🖥️'
  )
})