# Git Commands

## Content
- [Setup ssh key](#setup-ssh-key)
- [Init local repository](#init-local-repository)
- [Setup remotes](#setup-remotes)
   - [View remotes](#view-remotes)
   - [Add remote](#add-remote)
   - [Update remote](#update-remote)
   - [Remove remote](#remove-remote)
   - [Get url from remote](#get-url-from-remote)
- [Commit](#commit)
   - [Add files](#add-files)
   - [Setup commit message](#setup-commit-message)
   - [Push](#push)

## Setup ssh key
```shell
ssh-keygen -t rsa -b 4096
id_{name}
{passphrase}
{confirm_passphrase}
```

## Init local repository
```shell
cd {my_folder}
git clone https://gitlab.unistra.fr/maes-t3/{firstname}_{lastname}.git {destination}
cd {destination}
```

## Setup remotes

### View remotes
```shell
git remote
```

### Add remote
```shell
git remote add {remote_name} {url}
```

### Update remote
```shell
git remote set-url {remote_name} {new_url}
```

### Remove remote
```shell
git remote remove {remote_name}
```

### Get url from remote
```shell
git remote get-url {remote_name}
```

## Commit

### Add files
```shell
git add {file1} {file2} {file...}
```

### Setup commit message
```shell
git commit -m ":{emoji}: {message}"
```

Find emojis list [here](git_commit_messages.md)!

### Push
```shell
git push {remote} {branch}
``` 

> Written by [**Loïc MAES**](https://github.com/loicmaes) in 2023
