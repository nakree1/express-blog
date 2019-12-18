import jwt from 'jsonwebtoken';

function TokenGenerator(secret, options) {
  this.secret = secret;
  this.options = options; //algorithm + keyid + noTimestamp + expiresIn + notBefore
}

TokenGenerator.prototype.sign = function(payload, signOptions) {
  return new Promise((resolve, reject) => {
    const jwtSignOptions = { ...this.options, ...signOptions };
    jwt.sign(payload, this.secret, jwtSignOptions, (err, token) => {
      if (err) {
        reject(err);
      }

      resolve(token);
    });
  });
};

TokenGenerator.prototype.verify = function(token, verifyOptions) {
  return new Promise((resolve, reject) => {
    const { algorithm, expiresIn } = this.options;
    const jwtSignOptions = { algorithm, maxAge: expiresIn, ...verifyOptions };

    jwt.verify(token, this.secret, jwtSignOptions, (err, payload) => {
      if (err) {
        reject(err);
      }

      resolve(payload);
    });
  });
};

// TokenGenerator.prototype.sign = function(payload, signOptions) {
//   const jwtSignOptions = Object.assign({}, signOptions, this.options);
//   return jwt.sign(payload, this.secretOrPrivateKey, jwtSignOptions);
// };

// TokenGenerator.prototype.verify = function(payload, secret, signOptions) {
//   const jwtSignOptions = Object.assign({}, signOptions, this.options);
//   return jwt.sign(payload, this.secretOrPrivateKey, jwtSignOptions);
// };

// refreshOptions.verify = options you would use with verify function
// refreshOptions.jwtid = contains the id for the new token
// TokenGenerator.prototype.refresh = function(token, refreshOptions) {
//   const payload = jwt.verify(token, this.secretOrPublicKey, refreshOptions.verify);
//   delete payload.iat;
//   delete payload.exp;
//   delete payload.nbf;
//   delete payload.jti; //We are generating a new token, if you are using jwtid during signing, pass it in refreshOptions
//   const jwtSignOptions = Object.assign({ }, this.options, { jwtid: refreshOptions.jwtid });
//   // The first signing converted all needed options into claims, they are already in the payload
//   return jwt.sign(payload, this.secretOrPrivateKey, jwtSignOptions);
// }

export default TokenGenerator;
