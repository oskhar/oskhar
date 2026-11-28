```
for pair in TIMEDEPOSIT:3607 CIF:01605 TIMEDEPOSIT:3806 TIMEDEPOSIT:3807; do
  group=${pair%:*}
  trx=${pair#*:}
  prefix="APP_WS_API_CORE_$group"

  protocol=$(printenv "${prefix}_PROTOCOL")
  host=$(printenv "${prefix}_IP")
  port=$(printenv "${prefix}_PORT")
  path=$(printenv "${prefix}_PATH_$trx")

  if [ -z "$protocol" ] || [ -z "$host" ] || [ -z "$port" ] || [ -z "$path" ]; then
    printf '%s: properti environment belum lengkap\n' "$trx"
    continue
  fi

  case "$host" in
    \[*\]) ;;
    *:*) host="[$host]" ;;
  esac
  case "$port" in
    -1) port='' ;;
    *) port=":$port" ;;
  esac

  printf '%s %s://%s%s%s\n' "$trx" "$protocol" "$host" "$port" "$path"
done
```

```
curl -fsS --max-time 10 \
  'http://127.0.0.1:8080/actuator/env/app.ws.api.core.timedeposit.path.3607'

```
