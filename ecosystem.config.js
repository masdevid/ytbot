module.exports = {
  apps : [
      {
        name: "ytlivebot",
        script: "./bot.py",
        watch: true,
        instances: 8,
        exec_mode: "fork",
        args: "1 LOpPkkTaDik 800",
        max_memory_restart: "28G",
        interpreter: 'python3',
        autorestart: false,
	error_file: "./logs"
      }
  ]
}

