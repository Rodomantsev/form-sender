-- Вставка данных в таблицу пользователей
INSERT
    INTO users (username, email, password, role)
    VALUES
        ('user1', 'user1@example.com', 'pass1', 'role1'),
        ('user2', 'user2@example.com', 'pass2', 'role2'),
        ('name3', 'user3@example.com', 'pass3', 'role3');

-- Вставка данных в таблицу проектов
INSERT
    INTO projects (user_id, email)
    VALUES
        (1, 'user1@example.com'),
        (1, 'user1@example.com'),
        (1, 'user1@example.com'),
        (1, 'user1@example.com'),
        (1, 'user1@example.com'),
        (1, 'user1@example.com'),
        (1, 'user1@example.com'),
        (2, 'user2@example.com'),
        (2, 'user2@example.com'),
        (2, 'user2@example.com'),
        (2, 'user2@example.com'),
        (2, 'user2@example.com'),
        (2, 'user2@example.com'),
        (2, 'user2@example.com');
