# Fake Server Template

Helps to create fake implementations for external dependencies.

## Dependencies

- NodeJS 18+
- Docker

## Usage

```sh
docker run --init -p 7000:7000 experimentalsoftware/fake-server
```

## Development

```sh
npm run dev
```

## Maintenance

### Build Docker image

```sh
docker image build . -t experimentalsoftware/fake-server
```

## Alternatives

- https://wiremock.org/
- https://tweak-extension.com/
- https://github.com/typicode/json-server

## References

- https://abseil.io/resources/swe-book/html/ch13.html
- https://microsoft.github.io/code-with-engineering-playbook/developer-experience/client-app-inner-loop/
