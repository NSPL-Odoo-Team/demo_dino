from odoo import http
from odoo.http import request

class DinoGameController(http.Controller):
    @http.route('/dino', type='http', auth='public', website=True)
    def dino_game(self, **kw):
        return request.render('dino_game.dino_game_template')