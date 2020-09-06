module.exports = {
  apps : [
      {
        name: "ytlivebot",
        script: "./bot.py",
        watch: true,
        instances: 1,
        exec_mode: "fork",
        args: "1 QyTReKWfNsM 500",
        max_memory_restart: "800M",
        interpreter: 'python3',
        autorestart: false,
	error_file: "./logs"
      }
  ]
}

