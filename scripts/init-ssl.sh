#!/bin/bash
# Run this once on the server to get initial SSL certs
# Usage: ./scripts/init-ssl.sh yourdomain.com your@email.com

set -e

DOMAIN=$1
EMAIL=$2

if [ -z "$DOMAIN" ] || [ -z "$EMAIL" ]; then
  echo "Usage: $0 <domain> <email>"
  exit 1
fi

# Get cert via standalone mode (before HAProxy is running)
docker run --rm -p 80:80 \
  -v letsencrypt_data:/etc/letsencrypt \
  certbot/certbot certonly \
  --standalone \
  --non-interactive \
  --agree-tos \
  --email "$EMAIL" \
  -d "$DOMAIN"

# Combine cert + key into single PEM for HAProxy
mkdir -p /opt/app/certs
cat "/var/lib/docker/volumes/letsencrypt_data/_data/live/$DOMAIN/fullchain.pem" \
    "/var/lib/docker/volumes/letsencrypt_data/_data/live/$DOMAIN/privkey.pem" \
    > "/opt/app/certs/$DOMAIN.pem"

echo "SSL certificate created. You can now run: docker compose up -d"
