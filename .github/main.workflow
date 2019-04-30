################################################
# Workflow for a branch push 
################################################
workflow "build and test on branch" {
  resolves = [
    "branch.lint.node.10",
    "branch.test.node.10",
    "branch.test.node.8",
    # "branch.test.node.12"
  ]
  on = "push"
}

# node 10 
action "branch.filter" {
  uses = "actions/bin/filter@master"
  args = "branch"
}

action "branch.install.node.10" {
  needs = ["branch.filter"]
  uses = "docker://node:10"
  args = "yarn install"
}

action "branch.build.node.10" {
  uses = "docker://node:10"
  needs = ["branch.install.node.10"]
  args = "yarn run build"
}

action "branch.lint.node.10" {
  uses = "docker://node:10"
  needs = ["branch.install.node.10"]
  args = "yarn run lint"
}

action "branch.test.node.10" {
  uses = "docker://node:10"
  needs = ["branch.build.node.10"]
  args = "yarn run test"
}

# node 8
action "branch.install.node.8" {
  needs = ["branch.filter"]
  uses = "docker://node:8"
  args = "yarn install"
}

action "branch.build.node.8" {
  uses = "docker://node:8"
  needs = ["branch.install.node.8"]
  args = "yarn run build"
}

action "branch.test.node.8" {
  uses = "docker://node:8"
  needs = ["branch.build.node.8"]
  args = "yarn run test"
}

# @todo node 12
# action "branch.install.node.12" {
#   needs = ["branch.filter"]
#   uses = "docker://node:12"
#   args = "yarn install"
# }

# action "branch.build.node.12" {
#   uses = "docker://node:12"
#   needs = ["branch.install.node.12"]
#   args = "yarn run build"
# }

# action "branch.test.node.12" {
#   uses = "docker://node:12"
#   needs = ["branch.build.node.12"]
#   args = "yarn run test"
# }

################################################
# Workflow for a Pull request
################################################
workflow "build and test on PR" {
  resolves = [
    "pr.lint.node.10",
    "pr.test.node.10",
    "pr.test.node.8",
    # "pr.test.node.12"
  ]
  on = "pull_request"
}

# node 10 
action "pr.filter" {
  uses = "actions/bin/filter@master"
  args = "action 'opened|synchronize|reopened'"
}

action "pr.install.node.10" {
  needs = ["pr.filter"]
  uses = "docker://node:10"
  args = "yarn install"
}

action "pr.build.node.10" {
  uses = "docker://node:10"
  needs = ["pr.install.node.10"]
  args = "yarn run build"
}

action "pr.lint.node.10" {
  uses = "docker://node:10"
  needs = ["pr.install.node.10"]
  args = "yarn run lint"
}

action "pr.test.node.10" {
  uses = "docker://node:10"
  needs = ["pr.build.node.10"]
  args = "yarn run test"
}

# node 8
action "pr.install.node.8" {
  needs = ["pr.filter"]
  uses = "docker://node:8"
  args = "yarn install"
}

action "pr.build.node.8" {
  uses = "docker://node:8"
  needs = ["pr.install.node.8"]
  args = "yarn run build"
}

action "pr.test.node.8" {
  uses = "docker://node:8"
  needs = ["pr.build.node.8"]
  args = "yarn run test"
}

# @todo node 12
# action "pr.install.node.12" {
#   needs = ["pr.filter"]
#   uses = "docker://node:12"
#   args = "yarn install"
# }

# action "pr.build.node.12" {
#   uses = "docker://node:12"
#   needs = ["pr.install.node.12"]
#   args = "yarn run build"
# }

# action "pr.test.node.12" {
#   uses = "docker://node:12"
#   needs = ["pr.build.node.12"]
#   args = "yarn run test"
# }


################################################
# Workflow for a github release when a tag is
# pushed
################################################
workflow "github release" {
  resolves = [
    "release.github",
    "release.lint",
  ]
  on = "push"
}

action "release.filter" {
  uses = "actions/bin/filter@master"
  args = "tag v*"
}

action "release.install" {
  uses = "docker://node:10"
  needs = ["release.filter"]
  args = "yarn install"
}

action "release.build" {
  uses = "docker://node:10"
  needs = ["release.install"]
  args = "yarn run build"
}

action "release.lint" {
  uses = "docker://node:10"
  needs = ["release.install"]
  args = "yarn run lint"
}

action "release.test" {
  uses = "docker://node:10"
  needs = ["release.build"]
  args = "yarn run test"
}

action "release.auth" {
  needs = ["release.test"]
  uses = "actions/bin/filter@master"
  args = ["actor", "octocat", "torvalds"]
}

action "release.npm.publish" {
  needs = ["release.auth"]
  uses = "docker://node:10"
  args = "sh scripts/publish.sh"
  secrets = [
    "REGISTRY_AUTH_TOKEN",
  ]
  env = {
    REGISTRY_URL = "registry.npmjs.org"
  }
}

action "release.github" {
  needs = ["release.npm.publish"]
  uses = "docker://node:10"
  args = "sh scripts/github-release.sh"
  secrets = [
    "GITHUB_TOKEN",
  ]
}
