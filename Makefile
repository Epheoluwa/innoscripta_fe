build:
	docker-compose -f docker-compose.dev.yml build
up:
	docker-compose -f docker-compose.dev.yml up -d
stop:
	docker-compose -f docker-compose.dev.yml stop
down:
	docker-compose -f docker-compose.dev.yml down
refresh:
	docker build --no-cache -t app-dev -f Dockerfile .
