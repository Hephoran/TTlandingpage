#!/bin/bash
# Add to crontab: 0 3 * * 1 /opt/app/scripts/renew-ssl.sh yourdomain.com
# Runs weekly at 3am Monday

set -e

DOMAIN=$1

if [ -z "$DOMAIN" ]; then
  echo "Usage: $0 <domain>"
  exit 1
fi

docker compose -f /opt/app/docker-compose.yml run --rm certbot renew

# Recombine certs for HAProxy
cat "/var/lib/docker/volumes/letsencrypt_data/_data/live/$DOMAIN/fullchain.pem" \
    "/var/lib/docker/volumes/letsencrypt_data/_data/live/$DOMAIN/privkey.pem" \
    > "/opt/app/certs/$DOMAIN.pem"

# Reload HAProxy without downtime
docker compose -f /opt/app/docker-compose.yml kill -s HUP haproxy
