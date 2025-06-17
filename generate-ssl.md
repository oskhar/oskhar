IP_PUBLIC=34.101.144.246  # Ganti dengan IP Anda

cat > ssl/san.cnf <<EOF
[req]
default_bits       = 2048
distinguished_name = req_distinguished_name
req_extensions     = req_ext
prompt = no

[req_distinguished_name]
CN = $IP_PUBLIC

[req_ext]
subjectAltName = @alt_names

[alt_names]
IP.1 = $IP_PUBLIC
EOF

openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
-keyout ssl/mediamtx.key -out ssl/mediamtx.crt -config ssl/san.cnf -extensions req_ext
