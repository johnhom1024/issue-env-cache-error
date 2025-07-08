# issue-env-cache-error

this repo is a demo to show nx issue of env cache

1. Run pnpm build

```
NAME=a pnpm nx run app:build (First run, NOT CACHED, Output a)
```

2. Run pnpm build

```
NAME=a pnpm nx run app:build (Second run CACHED, Output a)
```

3. Run pnpm build:b

```
NAME=b pnpm nx run app:build (First run, NOT CACHED, Build File Change! Output b)
```

4. Run pnpm build:b

```
NAME=b pnpm nx run app:build (Second run, CACHED, Build File No Change! Output b)
```

5. Run pnpm build

```
NAME=a pnpm nx run app:build (Third run, CACHED, Build File Change! Output a)
```

6. Run pnpm build:b (Wrong)

```
NAME=a pnpm nx run app:build (Third run, CACHED, But File No Change! Output a, It should Output b)
```