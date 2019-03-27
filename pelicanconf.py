#!/usr/bin/env python
# -*- coding: utf-8 -*- #

AUTHOR = 'Bibek Gautam'
SITENAME = 'Bibek Gautam - Blog'
SITEURL = ''
THEME = 'Flex'
SITETITLE = 'Thoughts from /dev/random !'
SITESUBTITLE = 'Aspiring Physicist and programmer'
SITEDESCRIPTION = 'Bibek Gautam\'s Thoughts and Writings'

SITELOGO = '//s.gravatar.com/avatar/5dc5ba59a94eeab2106ad9d397361b2c?s=120'
FAVICON = '/images/favicon.ico'
BROWSER_COLOR = '#333333'
PYGMENTS_STYLE = 'monokai'

PATH = 'posts'

ROBOTS = 'index, follow'

TIMEZONE = 'America/New_York'

I18N_TEMPLATES_LANG = 'en'
DEFAULT_LANG = 'en'
OG_LOCALE = 'en_US'
LOCALE = 'en_US'

DATE_FORMATS = {
    'en': '%B %d, %Y',
}

FEED_ALL_ATOM = 'feeds/all.atom.xml'
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

USE_FOLDER_AS_CATEGORY = False
MAIN_MENU = True
HOME_HIDE_TAGS = True

LINKS = (('Portfolio', 'portfolio.html'),)

SOCIAL = (('github', 'https://github.com/bibek22'),
          ('twitter', 'https://twitter.com/truelostdreamer'))

MENUITEMS = (('Archives', '/archives.html'),
             ('Categories', '/categories.html'),
             ('Tags', '/tags.html'),)

CC_LICENSE = {
    'name': 'Creative Commons Attribution-ShareAlike',
    'version': '4.0',
    'slug': 'by-sa'
}

COPYRIGHT_YEAR = 2019

DEFAULT_PAGINATION = 10

PLUGIN_PATHS = ['./../pelican-addon-clones/pelican-plugins']
PLUGINS = ['sitemap', 'post_stats', 'i18n_subsites']

JINJA_ENVIRONMENT = {'extensions': ['jinja2.ext.i18n']}

SITEMAP = {
    'format': 'xml',
    'priorities': {
        'articles': 0.6,
        'indexes': 0.6,
        'pages': 0.5,
    },
    'changefreqs': {
        'articles': 'monthly',
        'indexes': 'daily',
        'pages': 'monthly',
    }
}

DISQUS_SITENAME = "alexandrevicenziblog"
ADD_THIS_ID = 'ra-55adbb025d4f7e55'

STATUSCAKE = {
    'trackid': 'SL0UAgrsYP',
    'days': 7,
    'rumid': 6852,
    'design': 6,
}

STATIC_PATHS = ['images', 'extra']

EXTRA_PATH_METADATA = {
    'extra/custom.css': {'path': 'static/custom.css'},
}

CUSTOM_CSS = 'static/custom.css'

USE_LESS = True

GOOGLE_ADSENSE = {
}
