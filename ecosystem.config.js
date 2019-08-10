module.exports = {
  apps: [{
    name: 'HOMELY_SERVICE',
    script: './client/src/App.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-217-217-247.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/Homely.pem',
      ref: 'origin/master',
      repo: 'git@github.com:vives/HOMELY',
      path: '/home/ubuntu/Home_Service',
      'post-deploy': 'npm run server && npm run client && pm2 startOrRestart ecosystem.config.js'
    }
  }
}	
