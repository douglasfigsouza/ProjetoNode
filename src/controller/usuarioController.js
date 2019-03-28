const Usuario = require("../model/usuarioModel");
const status = require("http-status");

exports.get = (request, response, next) => {
  const id = request.params.id;

  Usuario.findById(id)
    .then(usuario => {
      if (usuario) {
        response.status(status.OK).send(spoiler);
      } else {
        response.status(status.NOT_FOUND).send();
      }
    })
    .catch(error => next(error));
};

exports.get = (request, response, next) => {
  let limite = parseInt(request.query.limite || 0);
  let pagina = parseInt(request.query.pagina || 0);

  if (!Number.isInteger(limite) || !Number.isInteger(pagina)) {
    response.status(status.BAD_REQUEST).send();
  }

  const ITENS_POR_PAGINA = 10;

  limite = limite > ITENS_POR_PAGINA || limite <= 0 ? ITENS_POR_PAGINA : limite;
  pagina = pagina <= 0 ? 0 : pagina * limite;

  Usuario.findAll({ limit: limite, offset: pagina })
    .then(usuarios => {
      response.send(usuarios);
    })
    .catch(error => next(error));
};

exports.post = (request, response, next) => {
  const Nome = request.body.nome;
  const Login = request.body.login;
  const Senha = request.body.senha;

  Usuario.create({
    Nome: Nome,
    Login: Login,
    Senha: Senha
  })
    .then(() => {
      response.status(status.CREATED).send();
    })
    .catch(error => next(error));
};

exports.put = (request, response, next) => {
  const id = request.params.id;

  const Nome = request.body.nome;
  const Login = request.body.login;
  const Senha = request.body.senha;

  Usuario.findById(id)
    .then(usuario => {
      if (usuario) {
        Usuario.update(
          {
            Nome: Nome,
            Login: Login,
            Senha: Senha
          },
          { where: { id: id } }
        )
          .then(() => {
            response.status(status.OK).send();
          })
          .catch(error => next(error));
      } else {
        response.status(status.NOT_FOUND).send();
      }
    })
    .catch(error => next(error));
};

exports.delete = (request, response, next) => {
  const id = request.params.id;

  Usuario.findById(id)
    .then(usuario => {
      if (usuario) {
        Usuario.destroy({
          where: { id: id }
        })
          .then(() => {
            response.status(status.OK).send();
          })
          .catch(error => next(error));
      } else {
        response.status(status.NOT_FOUND).send();
      }
    })
    .catch(error => next(error));
};
