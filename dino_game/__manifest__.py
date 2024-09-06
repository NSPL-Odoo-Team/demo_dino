{
    'name': 'Dino Game',
    'version': '17.0.1.0.0',
    'category': 'Game',
    'summary': 'Chrome-like Dino Game built with Odoo OWL',
    'depends': [
        'web',
                ],
    'data': [
        'views/dino_game_template.xml',
        'views/menu.xml',
    ],
    'assets': {
        'web.assets_backend': [
            # 'dino_game/static/src/js/dino_game.js',
            # 'dino_game/static/src/css/dino_game.css',
        ],
    },
    'installable': True,
    'application': True,
}
