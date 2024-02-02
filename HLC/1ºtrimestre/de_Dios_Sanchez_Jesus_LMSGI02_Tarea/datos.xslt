<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <html xmlns="http://www.w3.org/1999/xhtml">
            <head>
                <title>Comité Ornitológico</title>
                <link rel="stylesheet" href="estilo.css" />
            </head>
            <body>
                <div id="comite">
                    <xsl:for-each select="campeonato_ornitologico/comite_organizador/miembro">
                        <div class="miembro">
                            <h2><xsl:value-of select="nombre"/></h2>
                            <p>Cargo: <xsl:value-of select="cargo"/></p>
                            <p>Teléfono: <xsl:value-of select="contacto/telefono"/></p>
                            <p>Correo: <xsl:value-of select="contacto/correo"/></p>
                        </div>
                    </xsl:for-each>
                </div>
            </body>
        </html>
    </xsl:template>

</xsl:stylesheet>
