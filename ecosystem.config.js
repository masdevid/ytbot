module.exports = {
  apps : [
      {
        name: "ytlivebot",
        script: "./bot.py",
        watch: true,
        instances: 5,
        exec_mode: "fork",
        args: "1 es3IPRZ7rQQ 1000",
        max_memory_restart: "24G",
        interpreter: 'python3',
        autorestart: false,
	error_file: "./logs"
      }
  ]
}

