math.randomseed(os.time())

function request()
  local n = math.random(1000000)
  local path = "/?random=" .. n
  return wrk.format("GET", path)
end
