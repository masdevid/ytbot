module.exports = {
  apps : [
      {
        name: "ytlivebot",
        script: "./bot.py",
        // cmd: "bot.py",
        watch: true,
        instances: 1,
        exec_mode: "fork",
        args: "1 pYqFdeA3qmo 200",
        max_memory_restart: "500M",
        interpreter: 'python3',
        autorestart: false,
      }
  ]
}