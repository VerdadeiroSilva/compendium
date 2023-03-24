terraform {
  required_version = "~>1.0"

  backend "remote" {
    hostname     = "app.terraform.io"
    organization = "bemtevi"

    workspaces {
      prefix = "btvi-"
    }
  }

  required_providers {
    aws = {
      version = "~>4.4"
      source  = "hashicorp/aws"
    }
    cloudflare = {
      source = "cloudflare/cloudflare"
    }
  }
}
