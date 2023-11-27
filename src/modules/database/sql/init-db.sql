-- Создание таблицы пользователей
CREATE TABLE IF NOT EXISTS users (
    id                  SERIAL PRIMARY KEY,
    username            VARCHAR(255) UNIQUE NOT NULL,
    password            VARCHAR(255) NOT NULL,
    email               VARCHAR(255) UNIQUE NOT NULL,
    role                VARCHAR(255) NOT NULL,
    created_at          TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at          TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Создание таблицы проектов
CREATE TABLE IF NOT EXISTS projects (
    id                  SERIAL PRIMARY KEY,
    user_id             INTEGER REFERENCES users(id),
    email               VARCHAR(255) NOT NULL,
    created_at          TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at          TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Создание таблицы востановления пароля
CREATE TABLE password_resets (
    id                  SERIAL PRIMARY KEY,
    user_id             INTEGER NOT NULL REFERENCES users(id),
    token               VARCHAR(255) NOT NULL,
    expiry              TIMESTAMP NOT NULL,
    created_at          TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
