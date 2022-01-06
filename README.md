# yarn2 boilerplate

## 0. Introduction

PnP, Zero-install, ZipFS 등 Yarn 2+의 강정을 느껴봅시다.

## 1. Pre-requisite

## 1.1. `git init`

버전 관리로 git을 사용합니다. 최초 ignore 파일 작성을 위해 [gitignore.io](https://www.toptal.com/developers/gitignore) 를 활용합니다.

## 1.2. `.nvmrc` - Node version

모두 같은 Node 버전을 사용하게 강제하기 위해 버전을 명시해둡니다.

Node.js 는 16 버전부터 M1칩을 지원하기 때문에(prebuilt binaries for Apple Silicon) 21년 12월 11일 기준 LTS이자 M1칩을 지원하는 16버전으로 사용했습니다.

### 1.2.1. nvm 설치

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

## 1.3. yarn v2 (\*berry)

### 1.3.1. 설치

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

### 1.3.2. initialize

```sh

yarn init -2
```

### 1.3.3. IDE 준비

PnP는 의존성 패키지를 기존처럼 FS으로 관리하지 않고 ZipFS를 통해 관리합니다.
그래서 에디터가 의존성 패키지의 타입을 인식하게 하기 위해 다음과 같은 절차가 필요합니다.

순서가 중요합니다!

1. 타입스크립트를 설치합니다.

```sh
yarn add -D typescript
```

2. vscode 에 ZipFS 익스텐션을 설치합니다.

3. vscode용 sdk를 설치합니다.

```sh
yarn dlx @yarnpkg/sdks vscode
```

4. vscode에서 typescript version 으로 workspace의 버전을 사용하게합니다.

이제 끝! enjoy your coding!
