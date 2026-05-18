CREATE TABLE IF NOT EXISTS list (
    id          SERIAL          PRIMARY KEY,            -- 自增主键
    title       VARCHAR(255)    NOT NULL,               -- 标题（必填）
    "desc"      TEXT,                                   -- 描述（选填）⚠️ desc 是保留字，需加引号
    is_complete BOOLEAN         NOT NULL DEFAULT FALSE  -- 是否完成
);