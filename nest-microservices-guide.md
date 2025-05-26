generate project
```bash
nest new nest-microservices-guide
```

run application
```bash
pnpm run start
```

open http://localhost:3000

## install
```bash
pnpm install --save @nestjs/microservices @grpc/grpc-js @grpc/proto-loader ts-proto
```

proto hanya sebagai kontrak untuk berkomunikasi antar server tanpa memperdulikan tech stack dari server tersebut.

## generate proto
```bash
protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./ --ts_proto_opt=nestJs=true ./proto/auth.proto
```

