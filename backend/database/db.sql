-- Crear Tablas

CREATE TABLE
    empresa(
        idempresa SERIAL NOT NULL,
        identificacion VARCHAR(16) NOT NULL,
        razonsocial VARCHAR(256) NOT NULL,
        PRIMARY KEY (idempresa)
    );

CREATE TABLE
    tipodocumento(
        idtipodocumento SERIAL NOT NULL,
        descripcion VARCHAR(256) NOT NULL,
        PRIMARY KEY (idtipodocumento)
    );

CREATE TABLE
    estado(
        idestado SERIAL NOT NULL,
        descripcion VARCHAR(256) NOT NULL,
        exitoso BOOLEAN NOT NULL,
        PRIMARY KEY (idestado)
    );

CREATE TABLE
    numeracion(
        idnumeracion SERIAL NOT NULL,
        idtipodocumento INT NOT NULL,
        idempresa INT NOT NULL,
        prefijo VARCHAR(8) NOT NULL,
        consecutivoinicial INT NOT NULL,
        consecutivofinal INT NOT NULL,
        vigenciainicial DATE NOT NULL,
        vigenciafinal DATE NOT NULL,
        PRIMARY KEY (idnumeracion),
        Foreign Key (idtipodocumento) REFERENCES tipodocumento(idtipodocumento),
        Foreign Key (idempresa) REFERENCES empresa(idempresa)
    );

CREATE TABLE
    documento(
        iddocumento SERIAL NOT NULL,
        idnumeracion INT NOT NULL,
        idestado INT NOT NULL,
        numero INT NOT NULL,
        fecha DATE NOT NULL,
        base DECIMAL NOT NULL,
        impuestos DECIMAL NOT NULL,
        PRIMARY KEY (iddocumento),
        Foreign Key (idnumeracion) REFERENCES numeracion(idnumeracion),
        Foreign Key (idestado) REFERENCES estado(idestado)
    );

INSERT INTO
    tipodocumento (descripcion)
VALUES ('Factura'), ('Nota Debito'), ('Nota Credito');

INSERT INTO
    estado (descripcion, exitoso)
VALUES ('Recibido', true), ('En validación', true), ('Sin errores', true), ('Formato Incorrecto', false), ('Con errores', false), ('Fuera de Vigencia', false), ('Fuera de Rango', false);

INSERT INTO
    empresa (identificacion, razonsocial)
VALUES (
        '12345678',
        'Venta Y Reparacion de Celulares Antonio'
    ), (
        '2137613213',
        'Movilitos Leandro'
    ), (
        '662973812',
        'ElectriBarranquilla'
    );

-- Poblado Tablas

INSERT INTO
    numeracion (
        idtipodocumento,
        idempresa,
        prefijo,
        consecutivoinicial,
        consecutivofinal,
        vigenciainicial,
        vigenciafinal
    )
VALUES (
        1,
        1,
        'A',
        1001,
        2000,
        '2023-01-01',
        '2023-12-31'
    ), (
        2,
        1,
        'B',
        2001,
        3000,
        '2023-01-01',
        '2023-12-31'
    ), (
        3,
        1,
        'C',
        3001,
        4000,
        '2023-01-01',
        '2023-12-31'
    ), (
        1,
        1,
        'D',
        4001,
        5000,
        '2023-01-01',
        '2023-12-31'
    ), (
        2,
        1,
        'E',
        5001,
        6000,
        '2023-01-01',
        '2023-12-31'
    ), (
        3,
        1,
        'F',
        6001,
        7000,
        '2023-01-01',
        '2023-12-31'
    );

-- Numeraciones para la empresa 2

INSERT INTO
    numeracion (
        idtipodocumento,
        idempresa,
        prefijo,
        consecutivoinicial,
        consecutivofinal,
        vigenciainicial,
        vigenciafinal
    )
VALUES (
        1,
        2,
        'G',
        1001,
        2000,
        '2023-01-01',
        '2023-12-31'
    ), (
        2,
        2,
        'H',
        2001,
        3000,
        '2023-01-01',
        '2023-12-31'
    ), (
        3,
        2,
        'I',
        3001,
        4000,
        '2023-01-01',
        '2023-12-31'
    ), (
        1,
        2,
        'J',
        4001,
        5000,
        '2023-01-01',
        '2023-12-31'
    ), (
        2,
        2,
        'K',
        5001,
        6000,
        '2023-01-01',
        '2023-12-31'
    ), (
        3,
        2,
        'L',
        6001,
        7000,
        '2023-01-01',
        '2023-12-31'
    );

-- Numeraciones para la empresa 3

INSERT INTO
    numeracion (
        idtipodocumento,
        idempresa,
        prefijo,
        consecutivoinicial,
        consecutivofinal,
        vigenciainicial,
        vigenciafinal
    )
VALUES (
        1,
        3,
        'M',
        1001,
        2000,
        '2023-01-01',
        '2023-12-31'
    ), (
        2,
        3,
        'N',
        2001,
        3000,
        '2023-01-01',
        '2023-12-31'
    ), (
        3,
        3,
        'O',
        3001,
        4000,
        '2023-01-01',
        '2023-12-31'
    ), (
        1,
        3,
        'P',
        4001,
        5000,
        '2023-01-01',
        '2023-12-31'
    ), (
        2,
        3,
        'Q',
        5001,
        6000,
        '2023-01-01',
        '2023-12-31'
    ), (
        3,
        3,
        'R',
        6001,
        7000,
        '2023-01-01',
        '2023-12-31'
    );

-- Documentos

-- Documentos para la numeración 1 (Empresa 1)

INSERT INTO
    documento (
        idnumeracion,
        idestado,
        numero,
        fecha,
        base,
        impuestos
    )
VALUES (
        1,
        1,
        1001,
        '2023-02-01',
        1000.00,
        150.00
    ), (
        1,
        2,
        1002,
        '2023-02-15',
        750.00,
        112.50
    ), (
        1,
        3,
        1003,
        '2023-03-01',
        1200.00,
        180.00
    ), (
        1,
        4,
        1004,
        '2023-03-15',
        850.00,
        127.50
    ), (
        1,
        5,
        1005,
        '2023-04-01',
        950.00,
        142.50
    ), (
        1,
        6,
        1006,
        '2023-04-15',
        1100.00,
        165.00
    );

-- Documentos para la numeración 2 (Empresa 1)

INSERT INTO
    documento (
        idnumeracion,
        idestado,
        numero,
        fecha,
        base,
        impuestos
    )
VALUES (
        2,
        1,
        2001,
        '2023-02-01',
        1300.00,
        195.00
    ), (
        2,
        2,
        2002,
        '2023-02-15',
        900.00,
        135.00
    ), (
        2,
        3,
        2003,
        '2023-03-01',
        800.00,
        120.00
    ), (
        2,
        4,
        2004,
        '2023-03-15',
        700.00,
        105.00
    ), (
        2,
        5,
        2005,
        '2023-04-01',
        950.00,
        142.50
    ), (
        2,
        6,
        2006,
        '2023-04-15',
        1200.00,
        180.00
    );

-- Documentos para la numeración 3 (Empresa 1)

INSERT INTO
    documento (
        idnumeracion,
        idestado,
        numero,
        fecha,
        base,
        impuestos
    )
VALUES (
        3,
        1,
        3001,
        '2023-02-01',
        1100.00,
        165.00
    ), (
        3,
        2,
        3002,
        '2023-02-15',
        950.00,
        142.50
    ), (
        3,
        3,
        3003,
        '2023-03-01',
        1200.00,
        180.00
    ), (
        3,
        4,
        3004,
        '2023-03-15',
        850.00,
        127.50
    ), (
        3,
        5,
        3005,
        '2023-04-01',
        950.00,
        142.50
    ), (
        3,
        6,
        3006,
        '2023-04-15',
        1100.00,
        165.00
    );

-- Documentos para la numeración 4 (Empresa 1)

INSERT INTO
    documento (
        idnumeracion,
        idestado,
        numero,
        fecha,
        base,
        impuestos
    )
VALUES (
        4,
        1,
        4001,
        '2023-02-01',
        1000.00,
        150.00
    ), (
        4,
        2,
        4002,
        '2023-02-15',
        750.00,
        112.50
    ), (
        4,
        3,
        4003,
        '2023-03-01',
        1200.00,
        180.00
    ), (
        4,
        4,
        4004,
        '2023-03-15',
        850.00,
        127.50
    ), (
        4,
        5,
        4005,
        '2023-04-01',
        950.00,
        142.50
    ), (
        4,
        6,
        4006,
        '2023-04-15',
        1100.00,
        165.00
    );

-- Documentos para la numeración 5 (Empresa 1)

INSERT INTO
    documento (
        idnumeracion,
        idestado,
        numero,
        fecha,
        base,
        impuestos
    )
VALUES (
        5,
        1,
        5001,
        '2023-02-01',
        1300.00,
        195.00
    ), (
        5,
        2,
        5002,
        '2023-02-15',
        900.00,
        135.00
    ), (
        5,
        3,
        5003,
        '2023-03-01',
        800.00,
        120.00
    ), (
        5,
        4,
        5004,
        '2023-03-15',
        700.00,
        105.00
    ), (
        5,
        5,
        5005,
        '2023-04-01',
        950.00,
        142.50
    ), (
        5,
        6,
        5006,
        '2023-04-15',
        1200.00,
        180.00
    );

-- Documentos para la numeración 6 (Empresa 1)

INSERT INTO
    documento (
        idnumeracion,
        idestado,
        numero,
        fecha,
        base,
        impuestos
    )
VALUES (
        6,
        1,
        6001,
        '2023-02-01',
        1100.00,
        165.00
    ), (
        6,
        2,
        6002,
        '2023-02-15',
        950.00,
        142.50
    ), (
        6,
        3,
        6003,
        '2023-03-01',
        1200.00,
        180.00
    ), (
        6,
        4,
        6004,
        '2023-03-15',
        850.00,
        127.50
    ), (
        6,
        5,
        6005,
        '2023-04-01',
        950.00,
        142.50
    ), (
        6,
        6,
        6006,
        '2023-04-15',
        1100.00,
        165.00
    );

-- Numeraciones 7, 8, 9, 10, 11 y 12 (Empresa 2)

-- Documentos para la numeración 7 (Empresa 2)

INSERT INTO
    documento (
        idnumeracion,
        idestado,
        numero,
        fecha,
        base,
        impuestos
    )
VALUES (
        7,
        1,
        7001,
        '2023-02-01',
        1000.00,
        150.00
    ), (
        7,
        2,
        7002,
        '2023-02-15',
        750.00,
        112.50
    ), (
        7,
        3,
        7003,
        '2023-03-01',
        1200.00,
        180.00
    ), (
        7,
        4,
        7004,
        '2023-03-15',
        850.00,
        127.50
    ), (
        7,
        5,
        7005,
        '2023-04-01',
        950.00,
        142.50
    ), (
        7,
        6,
        7006,
        '2023-04-15',
        1100.00,
        165.00
    );

-- Documentos para la numeración 8 (Empresa 2)

INSERT INTO
    documento (
        idnumeracion,
        idestado,
        numero,
        fecha,
        base,
        impuestos
    )
VALUES (
        8,
        1,
        8001,
        '2023-02-01',
        1300.00,
        195.00
    ), (
        8,
        2,
        8002,
        '2023-02-15',
        900.00,
        135.00
    ), (
        8,
        3,
        8003,
        '2023-03-01',
        800.00,
        120.00
    ), (
        8,
        4,
        8004,
        '2023-03-15',
        700.00,
        105.00
    ), (
        8,
        5,
        8005,
        '2023-04-01',
        950.00,
        142.50
    ), (
        8,
        6,
        8006,
        '2023-04-15',
        1200.00,
        180.00
    );

-- Documentos para la numeración 9 (Empresa 2)

INSERT INTO
    documento (
        idnumeracion,
        idestado,
        numero,
        fecha,
        base,
        impuestos
    )
VALUES (
        9,
        1,
        9001,
        '2023-02-01',
        1100.00,
        165.00
    ), (
        9,
        2,
        9002,
        '2023-02-15',
        950.00,
        142.50
    ), (
        9,
        3,
        9003,
        '2023-03-01',
        1200.00,
        180.00
    ), (
        9,
        4,
        9004,
        '2023-03-15',
        850.00,
        127.50
    ), (
        9,
        5,
        9005,
        '2023-04-01',
        950.00,
        142.50
    ), (
        9,
        6,
        9006,
        '2023-04-15',
        1100.00,
        165.00
    );

-- Documentos para la numeración 10 (Empresa 2)

INSERT INTO
    documento (
        idnumeracion,
        idestado,
        numero,
        fecha,
        base,
        impuestos
    )
VALUES (
        10,
        1,
        10001,
        '2023-02-01',
        1000.00,
        150.00
    ), (
        10,
        2,
        10002,
        '2023-02-15',
        750.00,
        112.50
    ), (
        10,
        3,
        10003,
        '2023-03-01',
        1200.00,
        180.00
    ), (
        10,
        4,
        10004,
        '2023-03-15',
        850.00,
        127.50
    ), (
        10,
        5,
        10005,
        '2023-04-01',
        950.00,
        142.50
    ), (
        10,
        6,
        10006,
        '2023-04-15',
        1100.00,
        165.00
    );

-- Documentos para la numeración 11 (Empresa 2)

INSERT INTO
    documento (
        idnumeracion,
        idestado,
        numero,
        fecha,
        base,
        impuestos
    )
VALUES (
        11,
        1,
        11001,
        '2023-02-01',
        1300.00,
        195.00
    ), (
        11,
        2,
        11002,
        '2023-02-15',
        900.00,
        135.00
    ), (
        11,
        3,
        11003,
        '2023-03-01',
        800.00,
        120.00
    ), (
        11,
        4,
        11004,
        '2023-03-15',
        700.00,
        105.00
    ), (
        11,
        5,
        11005,
        '2023-04-01',
        950.00,
        142.50
    ), (
        11,
        6,
        11006,
        '2023-04-15',
        1200.00,
        180.00
    );

-- Documentos para la numeración 12 (Empresa 2)

INSERT INTO
    documento (
        idnumeracion,
        idestado,
        numero,
        fecha,
        base,
        impuestos
    )
VALUES (
        12,
        1,
        12001,
        '2023-02-01',
        1100.00,
        165.00
    ), (
        12,
        2,
        12002,
        '2023-02-15',
        950.00,
        142.50
    ), (
        12,
        3,
        12003,
        '2023-03-01',
        1200.00,
        180.00
    ), (
        12,
        4,
        12004,
        '2023-03-15',
        850.00,
        127.50
    ), (
        12,
        5,
        12005,
        '2023-04-01',
        950.00,
        142.50
    ), (
        12,
        6,
        12006,
        '2023-04-15',
        1100.00,
        165.00
    );

-- Documentos para la numeración 13 (Empresa 3)

INSERT INTO
    documento (
        idnumeracion,
        idestado,
        numero,
        fecha,
        base,
        impuestos
    )
VALUES (
        13,
        1,
        13001,
        '2023-02-01',
        1000.00,
        150.00
    ), (
        13,
        2,
        13002,
        '2023-02-15',
        750.00,
        112.50
    ), (
        13,
        3,
        13003,
        '2023-03-01',
        1200.00,
        180.00
    ), (
        13,
        4,
        13004,
        '2023-03-15',
        850.00,
        127.50
    ), (
        13,
        5,
        13005,
        '2023-04-01',
        950.00,
        142.50
    ), (
        13,
        6,
        13006,
        '2023-04-15',
        1100.00,
        165.00
    );

-- Documentos para la numeración 14 (Empresa 3)

INSERT INTO
    documento (
        idnumeracion,
        idestado,
        numero,
        fecha,
        base,
        impuestos
    )
VALUES (
        14,
        1,
        14001,
        '2023-02-01',
        1300.00,
        195.00
    ), (
        14,
        2,
        14002,
        '2023-02-15',
        900.00,
        135.00
    ), (
        14,
        3,
        14003,
        '2023-03-01',
        800.00,
        120.00
    ), (
        14,
        4,
        14004,
        '2023-03-15',
        700.00,
        105.00
    ), (
        14,
        5,
        14005,
        '2023-04-01',
        950.00,
        142.50
    ), (
        14,
        6,
        14006,
        '2023-04-15',
        1200.00,
        180.00
    );

-- Documentos para la numeración 15 (Empresa 3)

INSERT INTO
    documento (
        idnumeracion,
        idestado,
        numero,
        fecha,
        base,
        impuestos
    )
VALUES (
        15,
        1,
        15001,
        '2023-02-01',
        1100.00,
        165.00
    ), (
        15,
        2,
        15002,
        '2023-02-15',
        950.00,
        142.50
    ), (
        15,
        3,
        15003,
        '2023-03-01',
        1200.00,
        180.00
    ), (
        15,
        4,
        15004,
        '2023-03-15',
        850.00,
        127.50
    ), (
        15,
        5,
        15005,
        '2023-04-01',
        950.00,
        142.50
    ), (
        15,
        6,
        15006,
        '2023-04-15',
        1100.00,
        165.00
    );

-- Documentos para la numeración 16 (Empresa 3)

INSERT INTO
    documento (
        idnumeracion,
        idestado,
        numero,
        fecha,
        base,
        impuestos
    )
VALUES (
        16,
        1,
        16001,
        '2023-02-01',
        1000.00,
        150.00
    ), (
        16,
        2,
        16002,
        '2023-02-15',
        750.00,
        112.50
    ), (
        16,
        3,
        16003,
        '2023-03-01',
        1200.00,
        180.00
    ), (
        16,
        4,
        16004,
        '2023-03-15',
        850.00,
        127.50
    ), (
        16,
        5,
        16005,
        '2023-04-01',
        950.00,
        142.50
    ), (
        16,
        6,
        16006,
        '2023-04-15',
        1100.00,
        165.00
    );

-- Documentos para la numeración 17 (Empresa 3)

INSERT INTO
    documento (
        idnumeracion,
        idestado,
        numero,
        fecha,
        base,
        impuestos
    )
VALUES (
        17,
        1,
        17001,
        '2023-02-01',
        1300.00,
        195.00
    ), (
        17,
        2,
        17002,
        '2023-02-15',
        900.00,
        135.00
    ), (
        17,
        3,
        17003,
        '2023-03-01',
        800.00,
        120.00
    ), (
        17,
        4,
        17004,
        '2023-03-15',
        700.00,
        105.00
    ), (
        17,
        5,
        17005,
        '2023-04-01',
        950.00,
        142.50
    ), (
        17,
        6,
        17006,
        '2023-04-15',
        1200.00,
        180.00
    );

-- Documentos para la numeración 18 (Empresa 3)

INSERT INTO
    documento (
        idnumeracion,
        idestado,
        numero,
        fecha,
        base,
        impuestos
    )
VALUES (
        18,
        1,
        18001,
        '2023-02-01',
        1100.00,
        165.00
    ), (
        18,
        2,
        18002,
        '2023-02-15',
        950.00,
        142.50
    ), (
        18,
        3,
        18003,
        '2023-03-01',
        1200.00,
        180.00
    ), (
        18,
        4,
        18004,
        '2023-03-15',
        850.00,
        127.50
    ), (
        18,
        5,
        18005,
        '2023-04-01',
        950.00,
        142.50
    ), (
        18,
        6,
        18006,
        '2023-04-15',
        1100.00,
        165.00
    );

-- -------CONSULTAS------- --

-- Consulta 1

SELECT
    e.idempresa,
    e.identificacion,
    e.razonsocial,
    COUNT(
        CASE
            WHEN est.exitoso = false THEN 1
        END
    ) AS documentos_fallidos,
    COUNT(
        CASE
            WHEN est.exitoso = true THEN 1
        END
    ) AS documentos_exitosos
FROM empresa e
    JOIN numeracion n ON e.idempresa = n.idempresa
    JOIN documento doc ON n.idnumeracion = doc.idnumeracion
    JOIN estado est ON doc.idestado = est.idestado
GROUP BY
    e.idempresa,
    e.identificacion,
    e.razonsocial
HAVING
    COUNT(
        CASE
            WHEN est.exitoso = false THEN 1
        END
    ) > COUNT(
        CASE
            WHEN est.exitoso = true THEN 1
        END
    );

-- Consulta 2

SELECT
    e.idempresa,
    e.identificacion,
    e.razonsocial,
    COALESCE(
        SUM(
            CASE
                WHEN td.descripcion = 'Factura'
                AND d.fecha BETWEEN '2023-01-01' AND '2023-12-31' THEN 1
                ELSE 0
            END
        ),
        0
    ) AS total_facturas,
    COALESCE(
        SUM(
            CASE
                WHEN td.descripcion = 'Nota Débito'
                AND d.fecha BETWEEN '2023-01-01' AND '2023-12-31' THEN 1
                ELSE 0
            END
        ),
        0
    ) AS total_notas_debito,
    COALESCE(
        SUM(
            CASE
                WHEN td.descripcion = 'Nota Crédito'
                AND d.fecha BETWEEN '2023-01-01' AND '2023-12-31' THEN 1
                ELSE 0
            END
        ),
        0
    ) AS total_notas_credito
FROM empresa e
    LEFT JOIN numeracion n ON e.idempresa = n.idempresa
    LEFT JOIN documento d ON n.idnumeracion = d.idnumeracion
    LEFT JOIN tipodocumento td ON n.idtipodocumento = td.idtipodocumento
WHERE
    d.fecha BETWEEN '2023-01-01' AND '2023-12-31'
GROUP BY
    e.idempresa,
    e.identificacion,
    e.razonsocial;

-- Consulta 3

SELECT
    e.idempresa,
    e.identificacion,
    e.razonsocial,
    est.descripcion AS estado,
    COUNT(d.iddocumento) AS cantidad_documentos
FROM empresa e
    LEFT JOIN numeracion n ON e.idempresa = n.idempresa
    LEFT JOIN documento d ON n.idnumeracion = d.idnumeracion
    LEFT JOIN estado est ON d.idestado = est.idestado
GROUP BY
    e.idempresa,
    e.identificacion,
    e.razonsocial,
    est.descripcion
ORDER BY
    e.idempresa,
    est.descripcion;

-- Consulta 4

SELECT
    e.idempresa,
    e.identificacion,
    e.razonsocial,
    COUNT(
        CASE
            WHEN est.exitoso = false THEN 1
        END
    ) AS documentos_no_exitosos
FROM empresa e
    LEFT JOIN numeracion n ON e.idempresa = n.idempresa
    LEFT JOIN documento doc ON n.idnumeracion = doc.idnumeracion
    LEFT JOIN estado est ON doc.idestado = est.idestado
GROUP BY
    e.idempresa,
    e.identificacion,
    e.razonsocial
HAVING
    COUNT(
        CASE
            WHEN est.exitoso = false THEN 1
        END
    ) > 3;

-- Consulta 5

SELECT
    e.idempresa,
    e.identificacion,
    e.razonsocial,
    COUNT(
        CASE
            WHEN doc.numero < n.consecutivoinicial
            OR doc.numero > n.consecutivofinal THEN 1
            WHEN doc.fecha < n.vigenciainicial
            OR doc.fecha > n.vigenciafinal THEN 1
            ELSE NULL
        END
    ) AS documentos_fuera_rango_vigencia
FROM empresa e
    LEFT JOIN numeracion n ON e.idempresa = n.idempresa
    LEFT JOIN documento doc ON n.idnumeracion = doc.idnumeracion
WHERE (
        doc.numero IS NOT NULL
        AND (
            doc.numero < n.consecutivoinicial
            OR doc.numero > n.consecutivofinal
        )
    )
    OR (
        doc.fecha IS NOT NULL
        AND (
            doc.fecha < n.vigenciainicial
            OR doc.fecha > n.vigenciafinal
        )
    )
GROUP BY
    e.idempresa,
    e.identificacion,
    e.razonsocial;

-- Consulta 6

SELECT
    e.idempresa,
    e.identificacion,
    e.razonsocial,
    COALESCE(
        SUM(
            CASE
                WHEN td.descripcion = 'Factura' THEN d.base + d.impuestos
                ELSE 0
            END
        ),
        0
    ) AS total_dinero_recibido
FROM empresa e
    LEFT JOIN numeracion n ON e.idempresa = n.idempresa
    LEFT JOIN documento d ON n.idnumeracion = d.idnumeracion
    LEFT JOIN tipodocumento td ON n.idtipodocumento = td.idtipodocumento
    LEFT JOIN estado est ON d.idestado = est.idestado
WHERE
    est.exitoso = true -- Solo considerar documentos exitosos
GROUP BY
    e.idempresa,
    e.identificacion,
    e.razonsocial;

-- Consulta 7

SELECT
    numero_completo,
    COUNT(*) AS repeticiones
FROM (
        SELECT
            CONCAT(n.prefijo, d.numero) AS numero_completo
        FROM numeracion n
            JOIN documento d ON n.idnumeracion = d.idnumeracion
    ) AS numeros_completos
GROUP BY numero_completo
HAVING COUNT(*) > 1;