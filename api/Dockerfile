ARG image=node:16.20

FROM $image-slim AS build

COPY src /src
COPY .eslintrc.json /
COPY jest.config.json /
COPY package.json /
COPY tsconfig.build.json /
COPY tsconfig.json /

RUN yarn
RUN yarn lint:ci
RUN yarn test:ci
RUN yarn build

FROM $image-alpine

COPY --from=build /dist /dist
COPY --from=build /package.json /
COPY --from=build /yarn.lock /

RUN yarn --production && yarn add common@file:../common/dist

ENV NODE_ENV=production
ENV NODE_PATH=dist

CMD node dist/cmd/api
