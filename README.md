# Project n-local

TypeScript + Web 개발의 표준의 되는 boilerplace를 지향합니다.
생산성을 증대시키는 여러 패키지, 직관적인 디렉토리 구조, 런타임별 최적화를 지향합니다.

## 1. Pre-requisite

### 1.1. `git init`

버전 관리로 git을 사용합니다.

최초 ignore 파일 작성을 위해 [gitignore.io](https://www.toptal.com/developers/gitignore) 를 활용했어요.

### 1.2. Node version

모두 같은 Node 버전을 사용하게 강제하기 위해 버전을 명시해둡니다.

Node.js 는 16 버전부터 M1칩을 지원하기 때문에(prebuilt binaries for Apple Silicon) 21년 12월 11일 기준 LTS이자 M1칩을 지원하는 16버전으로 사용했습니다.

#### nvm 설치

참고 : curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

```sh
# 프로필 파일(~/.bashrc or ~/.zshrc)에 다음 스크립트를 추가합니다
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

```sh
nvm install 16.13.1
```

프로젝트 디렉토리에 `.nvmrc`를 만들어 두었습니다.
다음의 명령어 로 디렉토리 버전을 사용할 수 있습니다.

```sh
nvm use
```

```sh
node --version # v16.13.1
```

### 1.3. yarn v2 (\*berry)

패키지 매니져로 yarn 을 사용합니다.

npm과 yarn v1의 여러 단점들을 개선시킨 yarn berry를 사용합니다.

#### 자세히

- node_modules는 fs로 접근하고 찾기에 너무 많은 I/O 자원의 낭비
- 의존성이 복잡하게 얽히고 중복설치되어 엄청 무거워짐.
- A가 B에 의존하는 패키지라면 package.json에 명시하지 않아도 B를 쓰는게 가능해짐(npm, yarn v1은 용량을 아끼려고 의존성 라이브러리를 호이스팅해서)
- A를 지워버리면? 갑자기 B를 못쓰는 유령 의존성이 존재
- 의존성을 검색할때 fs로 찾으니 너무 오래걸림 -> yarn berry의 pnp는 pnp.cjs로 의존성을 명시. 파일시스템 찾을 필요가 없다.
- Zipfs => 각 패키지마다 간섭하지 않고 따로 압축되어 깔림. => 용량이 아껴진다. 유령의존성 따위가 없어진다.
- 한 뎁스로 패키지들이 관리되니 package.json을 그대로 본딴 구조로 만들어짐 (정말 ? )
- Zero install => 용량 가벼우니 아예 git으로 버전관리를 해버리면? => 실행환경 상관없이 인스톨없이 바로 쓸 수 있음.
- 대신! 최초 git pull이 크다!(경우에 따라 다르지만 100MB급)
- 요는 압축파일이 디커플링을 보장하며 FS의 빈번한IO를 막는다.
- 쉽게말하면 파일질라에서 tar로 된 한파일을 받느냐, 수천수만 파일이 섞인 디렉토리를 받느냐. 전자가 압도적으로 빠르다. 용량은 같아도
- Zero install => CI/CD에 의존성 설치시간이 0가 된다 => 빠른 린팅, 빌드, 배포가 가능!

#### 설치

node 16.10 버전 이후로 corepack
The preferred way to manage Yarn is through Corepack, a new binary shipped with all Node.js releases starting from 16.10. It acts as an intermediary between you and Yarn, and lets you use different package manager versions across multiple projects without having to check-in the Yarn binary anymore.

yarn을 매니징하는데 corepack을 사용하길 권장하고 있습니다. 16.10 버전 부터 바이너리로 node.js에 실리고 있는데 현재는 opt-in이라 직접 설정을 켜줘야합니다.

```sh
# 터미널에서
corepack enable
```

corepack은 사용자와 yarn 사이의 중개자로 여러 프로젝트에서 다양한 버전의 yarn을 사용하게 해줍니다.

16 이하 버전에서는 다음 처럼 직접 설치해주어야 합니다.

```sh
npm i -g corepack
```

```sh
yarn init -2
```
