const ASSETS_PATH = '../pop-shoot-assets/';

const images = [
    { src: 'sprites/backgrounds/stage0back.png', id: 'stage0back' },
    { src: 'sprites/backgrounds/stage0mid.png', id: 'stage0mid' },
    { src: 'sprites/backgrounds/stage0front.png', id: 'stage0front' },
    { src: 'sprites/backgrounds/stage1back.png', id: 'stage1back' },
    { src: 'sprites/backgrounds/stage1mid.png', id: 'stage1mid' },
    { src: 'sprites/backgrounds/stage1front.png', id: 'stage1front' },
    { src: 'sprites/backgrounds/stage2back.png', id: 'stage2back' },
    { src: 'sprites/backgrounds/stage2mid.png', id: 'stage2mid' },
    { src: 'sprites/backgrounds/stage2front.png', id: 'stage2front' },
    { src: 'sprites/backgrounds/stage3back.png', id: 'stage3back' },
    { src: 'sprites/backgrounds/stage3mid.png', id: 'stage3mid' },
    { src: 'sprites/backgrounds/stage3front.png', id: 'stage3front' },
    { src: 'sprites/backgrounds/stage4back.png', id: 'stage4back' },
    { src: 'sprites/backgrounds/stage4mid.png', id: 'stage4mid' },
    { src: 'sprites/backgrounds/stage4front.png', id: 'stage4front' },
    { src: 'sprites/menu.png', id: 'menu' },
    { src: 'sprites/effects/weather/rain/rain0.png', id: 'rain0' },
    { src: 'sprites/effects/weather/rain/rain1.png', id: 'rain1' },
    { src: 'sprites/effects/weather/rain/rain2.png', id: 'rain2' },
    { src: 'sprites/effects/weather/rain/rain3.png', id: 'rain3' },
    { src: 'sprites/effects/weather/rain/rain4.png', id: 'rain4' },
    { src: 'sprites/effects/weather/rain/rain5.png', id: 'rain5' },
    { src: 'sprites/effects/weather/rain/rain6.png', id: 'rain6' },
    { src: 'sprites/effects/weather/rain/rain7.png', id: 'rain7' },
    { src: 'sprites/effects/weather/rain/rain8.png', id: 'rain8' },
    { src: 'sprites/effects/weather/wind/wind0.png', id: 'wind0' },
    { src: 'sprites/effects/weather/wind/wind1.png', id: 'wind1' },
    { src: 'sprites/effects/weather/wind/wind2.png', id: 'wind2' },
    { src: 'sprites/effects/weather/wind/wind3.png', id: 'wind3' },
    { src: 'sprites/effects/weather/wind/wind4.png', id: 'wind4' },
    { src: 'sprites/effects/weather/wind/wind5.png', id: 'wind5' },
    { src: 'sprites/effects/weather/wind/wind6.png', id: 'wind6' },
    { src: 'sprites/effects/weather/wind/wind7.png', id: 'wind7' },
    { src: 'sprites/effects/weather/wind/wind8.png', id: 'wind8' },
    { src: 'sprites/effects/weather/sand/sand0.png', id: 'sand0' },
    { src: 'sprites/effects/weather/sand/sand1.png', id: 'sand1' },
    { src: 'sprites/effects/weather/sand/sand2.png', id: 'sand2' },
    { src: 'sprites/effects/weather/sand/sand3.png', id: 'sand3' },
    { src: 'sprites/effects/weather/sand/sand4.png', id: 'sand4' },
    { src: 'sprites/effects/weather/sand/sand5.png', id: 'sand5' },
    { src: 'sprites/effects/weather/sand/sand6.png', id: 'sand6' },
    { src: 'sprites/effects/weather/sand/sand7.png', id: 'sand7' },
    { src: 'sprites/effects/weather/sand/sand8.png', id: 'sand8' },
    { src: 'sprites/effects/weather/vortex/vortex0.png', id: 'vortex0' },
    { src: 'sprites/effects/weather/vortex/vortex1.png', id: 'vortex1' },
    { src: 'sprites/effects/weather/vortex/vortex2.png', id: 'vortex2' },
    { src: 'sprites/effects/weather/vortex/vortex3.png', id: 'vortex3' },
    { src: 'sprites/effects/weather/vortex/vortex4.png', id: 'vortex4' },
    { src: 'sprites/effects/weather/vortex/vortex5.png', id: 'vortex5' },
    { src: 'sprites/effects/weather/vortex/vortex6.png', id: 'vortex6' },
    { src: 'sprites/effects/weather/vortex/vortex7.png', id: 'vortex7' },
    { src: 'sprites/effects/weather/vortex/vortex8.png', id: 'vortex8' },
    { src: 'sprites/effects/weather/vortex/hieroglyph.png', id: 'hieroglyph' },
    { src: 'sprites/effects/weather/matrix/matrix0.png', id: 'matrix0' },
    { src: 'sprites/effects/weather/matrix/matrix1.png', id: 'matrix1' },
    { src: 'sprites/effects/weather/matrix/matrix2.png', id: 'matrix2' },
    { src: 'sprites/effects/weather/matrix/matrix3.png', id: 'matrix3' },
    { src: 'sprites/effects/weather/matrix/matrix4.png', id: 'matrix4' },
    { src: 'sprites/effects/weather/matrix/matrix5.png', id: 'matrix5' },
    { src: 'sprites/effects/weather/matrix/matrix6.png', id: 'matrix6' },
    { src: 'sprites/effects/weather/matrix/matrix7.png', id: 'matrix7' },
    { src: 'sprites/effects/weather/matrix/matrix8.png', id: 'matrix8' },
    { src: 'sprites/effects/weather/matrix/matrix9.png', id: 'matrix9' },
    { src: 'sprites/effects/weather/matrix/matrix10.png', id: 'matrix10' },
    { src: 'sprites/effects/weather/matrix/matrix11.png', id: 'matrix11' },
    { src: 'sprites/effects/weather/matrix/matrix12.png', id: 'matrix12' },
    { src: 'sprites/player/player.png', id: 'player' },
    { src: 'sprites/player/shield.png', id: 'shield' },
    { src: 'sprites/player/shieldmetal.png', id: 'shieldmetal' },
    { src: 'sprites/player/shieldemp.png', id: 'shieldemp' },
    { src: 'sprites/player/shieldunderfire.png', id: 'shieldunderfire' },
    { src: 'sprites/player/shieldinvincibility.png', id: 'shieldinvincibility' },
    { src: 'sprites/player/shieldgrenade.png', id: 'shieldgrenade' },
    { src: 'sprites/player/flame0.png', id: 'flame0' },
    { src: 'sprites/player/flame1.png', id: 'flame1' },
    { src: 'sprites/player/flame2.png', id: 'flame2' },
    { src: 'sprites/player/flame3.png', id: 'flame3' },
    { src: 'sprites/player/flame4.png', id: 'flame4' },
    { src: 'sprites/player/flame5.png', id: 'flame5' },
    { src: 'sprites/player/flame6.png', id: 'flame6' },
    { src: 'sprites/player/flame7.png', id: 'flame7' },
    { src: 'sprites/player/flame8.png', id: 'flame8' },
    { src: 'sprites/player/flame9.png', id: 'flame9' },
    { src: 'sprites/player/flame10.png', id: 'flame10' },
    { src: 'sprites/player/flame11.png', id: 'flame11' },
    { src: 'sprites/enemies/greeninvader.png', id: 'greeninvader' },
    { src: 'sprites/enemies/greenplacer.png', id: 'greenplacer' },
    { src: 'sprites/enemies/greenterror.png', id: 'greenterror' },
    { src: 'sprites/enemies/greenemperor.png', id: 'greenemperor' },
    { src: 'sprites/enemies/greenufo.png', id: 'greenufo' },
    { src: 'sprites/enemies/blueinvader.png', id: 'blueinvader' },
    { src: 'sprites/enemies/blueufo.png', id: 'blueufo' },
    { src: 'sprites/enemies/blueplacer.png', id: 'blueplacer' },
    { src: 'sprites/enemies/blueterror.png', id: 'blueterror' },
    { src: 'sprites/enemies/blueemperor.png', id: 'blueemperor' },
    { src: 'sprites/enemies/redinvader.png', id: 'redinvader' },
    { src: 'sprites/enemies/redplacer.png', id: 'redplacer' },
    { src: 'sprites/enemies/redterror.png', id: 'redterror' },
    { src: 'sprites/enemies/redemperor.png', id: 'redemperor' },
    { src: 'sprites/enemies/redufo.png', id: 'redufo' },
    { src: 'sprites/enemies/blackinvader.png', id: 'blackinvader' },
    { src: 'sprites/enemies/blackplacer.png', id: 'blackplacer' },
    { src: 'sprites/enemies/blackterror.png', id: 'blackterror' },
    { src: 'sprites/enemies/blackemperor.png', id: 'blackemperor' },
    { src: 'sprites/enemies/yellowufo.png', id: 'yellowufo' },
    { src: 'sprites/enemies/diver.png', id: 'diver' },
    { src: 'sprites/enemies/boss_harvey.png', id: 'boss_harvey' },
    { src: 'sprites/enemies/boss_emperor.png', id: 'boss_emperor' },
    { src: 'sprites/enemies/boss_emperor_hardened.png', id: 'boss_emperor_hardened' },
    { src: 'sprites/enemies/boss_familiarsight.png', id: 'boss_familiarsight' },
    { src: 'sprites/enemies/boss_familiarsight_hardened.png', id: 'boss_familiarsight_hardened' },
    { src: 'sprites/enemies/boss_abuser.png', id: 'boss_abuser' },
    { src: 'sprites/enemies/boss_fk77.png', id: 'boss_fk77' },
    { src: 'sprites/enemies/boss_fk77_hardened.png', id: 'boss_fk77_hardened' },
    { src: 'sprites/enemies/redpackage.png', id: 'redpackage' },
    { src: 'sprites/enemies/orangepackage.png', id: 'orangepackage' },
    { src: 'sprites/effects/misc/fog.png', id: 'fog' },
    { src: 'sprites/effects/slashes/slash0.png', id: 'slash0' },
    { src: 'sprites/effects/slashes/slash1.png', id: 'slash1' },
    { src: 'sprites/effects/slashes/slash2.png', id: 'slash2' },
    { src: 'sprites/effects/slashes/slash3.png', id: 'slash3' },
    { src: 'sprites/effects/slashes/slashcrit0.png', id: 'slashcrit0' },
    { src: 'sprites/effects/slashes/slashcrit1.png', id: 'slashcrit1' },
    { src: 'sprites/effects/slashes/slashcrit2.png', id: 'slashcrit2' },
    { src: 'sprites/effects/slashes/slashcrit3.png', id: 'slashcrit3' },
    { src: 'sprites/effects/slashes/slashquad0.png', id: 'slashquad0' },
    { src: 'sprites/effects/slashes/slashquad1.png', id: 'slashquad1' },
    { src: 'sprites/effects/slashes/slashquad2.png', id: 'slashquad2' },
    { src: 'sprites/effects/slashes/slashquad3.png', id: 'slashquad3' },
    { src: 'sprites/effects/misc/whitescreen.png', id: 'whitescreen' },
    { src: 'sprites/effects/misc/blackscreen.png', id: 'blackscreen' },
    { src: 'sprites/effects/misc/lightbeam.png', id: 'lightbeam' },
    { src: 'sprites/lasers/laser.png', id: 'laser' },
    { src: 'sprites/lasers/seeker.png', id: 'seeker' },
    { src: 'sprites/lasers/rocket.png', id: 'rocket' },
    { src: 'sprites/lasers/darts0.png', id: 'darts0' },
    { src: 'sprites/lasers/darts1.png', id: 'darts1' },
    { src: 'sprites/lasers/darts2.png', id: 'darts2' },
    { src: 'sprites/lasers/darts3.png', id: 'darts3' },
    { src: 'sprites/lasers/bomb.png', id: 'bomb' },
    { src: 'sprites/lasers/quad.png', id: 'quad' },
    { src: 'sprites/lasers/thor.png', id: 'thor' },
    { src: 'sprites/lasers/firelaser.png', id: 'firelaser' },
    { src: 'sprites/lasers/airstrike.png', id: 'airstrike' },
    { src: 'sprites/lasers/shell0.png', id: 'shell0' },
    { src: 'sprites/lasers/shell1.png', id: 'shell1' },
    { src: 'sprites/lasers/shell2.png', id: 'shell2' },
    { src: 'sprites/hud/glass/glassbar.png', id: 'glassbar' },
    { src: 'sprites/hud/glass/glasspause.png', id: 'glasspause' },
    { src: 'sprites/hud/glass/glassgameover.png', id: 'glassgameover' },
    { src: 'sprites/hud/glass/glassshielddown.png', id: 'glassshielddown' },
    { src: 'sprites/hud/glass/glassstage1.png', id: 'glassstage1' },
    { src: 'sprites/hud/glass/glassstage2.png', id: 'glassstage2' },
    { src: 'sprites/hud/glass/glassstage3.png', id: 'glassstage3' },
    { src: 'sprites/hud/glass/glassstage4.png', id: 'glassstage4' },
    { src: 'sprites/hud/glass/glassstage5.png', id: 'glassstage5' },
    { src: 'sprites/hud/glass/glasspackage.png', id: 'glasspackage' },
    { src: 'sprites/hud/glass/glassnumber.png', id: 'glassnumber' },
    { src: 'sprites/hud/glass/vline.png', id: 'vline' },
    { src: 'sprites/hud/glass/coin.png', id: 'coin' },
    { src: 'sprites/hud/glass/clock.png', id: 'clock' },
    { src: 'sprites/hud/glass/floppy.png', id: 'floppy' },
    { src: 'sprites/hud/glass/wrench.png', id: 'wrench' },
    { src: 'sprites/hud/items/bombs_notification.png', id: 'bombs_notification' },
    { src: 'sprites/hud/items/toxic_notification.png', id: 'toxic_notification' },
    { src: 'sprites/hud/items/machinegun_notification.png', id: 'machinegun_notification' },
    { src: 'sprites/hud/items/greed_notification.png', id: 'greed_notification' },
    { src: 'sprites/hud/items/timefreeze_notification.png', id: 'timefreeze_notification' },
    { src: 'sprites/hud/items/darts_notification.png', id: 'darts_notification' },
    { src: 'sprites/hud/items/loopers_notification.png', id: 'loopers_notification' },
    { src: 'sprites/hud/items/metalshield_notification.png', id: 'metalshield_notification' },
    { src: 'sprites/hud/items/nitrogen_notification.png', id: 'nitrogen_notification' },
    { src: 'sprites/hud/items/uraniumfuel_notification.png', id: 'uraniumfuel_notification' },
    { src: 'sprites/hud/items/damage_notification.png', id: 'damage_notification' },
    { src: 'sprites/hud/items/spray_notification.png', id: 'spray_notification' },
    { src: 'sprites/hud/items/rocket_notification.png', id: 'rocket_notification' },
    { src: 'sprites/hud/items/emp_notification.png', id: 'emp_notification' },
    { src: 'sprites/hud/items/seekers_notification.png', id: 'seekers_notification' },
    { src: 'sprites/hud/items/clock_notification.png', id: 'clock_notification' },
    { src: 'sprites/hud/items/airstrike_notification.png', id: 'airstrike_notification' },
    { src: 'sprites/hud/items/shotgun_notification.png', id: 'shotgun_notification' },
    { src: 'sprites/hud/items/slicer_notification.png', id: 'slicer_notification' },
    { src: 'sprites/hud/items/grenade_notification.png', id: 'grenade_notification' },
    { src: 'sprites/hud/items/bombs_pause.png', id: 'bombs_pause' },
    { src: 'sprites/hud/items/toxic_pause.png', id: 'toxic_pause' },
    { src: 'sprites/hud/items/machinegun_pause.png', id: 'machinegun_pause' },
    { src: 'sprites/hud/items/greed_pause.png', id: 'greed_pause' },
    { src: 'sprites/hud/items/timefreeze_pause.png', id: 'timefreeze_pause' },
    { src: 'sprites/hud/items/darts_pause.png', id: 'darts_pause' },
    { src: 'sprites/hud/items/loopers_pause.png', id: 'loopers_pause' },
    { src: 'sprites/hud/items/metalshield_pause.png', id: 'metalshield_pause' },
    { src: 'sprites/hud/items/nitrogen_pause.png', id: 'nitrogen_pause' },
    { src: 'sprites/hud/items/uraniumfuel_pause.png', id: 'uraniumfuel_pause' },
    { src: 'sprites/hud/items/damage_pause.png', id: 'damage_pause' },
    { src: 'sprites/hud/items/spray_pause.png', id: 'spray_pause' },
    { src: 'sprites/hud/items/rocket_pause.png', id: 'rocket_pause' },
    { src: 'sprites/hud/items/emp_pause.png', id: 'emp_pause' },
    { src: 'sprites/hud/items/seekers_pause.png', id: 'seekers_pause' },
    { src: 'sprites/hud/items/clock_pause.png', id: 'clock_pause' },
    { src: 'sprites/hud/items/airstrike_pause.png', id: 'airstrike_pause' },
    { src: 'sprites/hud/items/shotgun_pause.png', id: 'shotgun_pause' },
    { src: 'sprites/hud/items/slicer_pause.png', id: 'slicer_pause' },
    { src: 'sprites/hud/items/grenade_pause.png', id: 'grenade_pause' },
    { src: 'sprites/hud/items/bombs_icon.png', id: 'bombs_icon' },
    { src: 'sprites/hud/items/toxic_icon.png', id: 'toxic_icon' },
    { src: 'sprites/hud/items/machinegun_icon.png', id: 'machinegun_icon' },
    { src: 'sprites/hud/items/greed_icon.png', id: 'greed_icon' },
    { src: 'sprites/hud/items/timefreeze_icon.png', id: 'timefreeze_icon' },
    { src: 'sprites/hud/items/darts_icon.png', id: 'darts_icon' },
    { src: 'sprites/hud/items/loopers_icon.png', id: 'loopers_icon' },
    { src: 'sprites/hud/items/metalshield_icon.png', id: 'metalshield_icon' },
    { src: 'sprites/hud/items/nitrogen_icon.png', id: 'nitrogen_icon' },
    { src: 'sprites/hud/items/uraniumfuel_icon.png', id: 'uraniumfuel_icon' },
    { src: 'sprites/hud/items/damage_icon.png', id: 'damage_icon' },
    { src: 'sprites/hud/items/spray_icon.png', id: 'spray_icon' },
    { src: 'sprites/hud/items/rocket_icon.png', id: 'rocket_icon' },
    { src: 'sprites/hud/items/emp_icon.png', id: 'emp_icon' },
    { src: 'sprites/hud/items/seekers_icon.png', id: 'seekers_icon' },
    { src: 'sprites/hud/items/clock_icon.png', id: 'clock_icon' },
    { src: 'sprites/hud/items/airstrike_icon.png', id: 'airstrike_icon' },
    { src: 'sprites/hud/items/shotgun_icon.png', id: 'shotgun_icon' },
    { src: 'sprites/hud/items/slicer_icon.png', id: 'slicer_icon' },
    { src: 'sprites/hud/items/grenade_icon.png', id: 'grenade_icon' },
    { src: 'sprites/effects/animations/invader_green_death/invadergreen_d0.png', id: 'invadergreen_d0' },
    { src: 'sprites/effects/animations/invader_green_death/invadergreen_d1.png', id: 'invadergreen_d1' },
    { src: 'sprites/effects/animations/invader_green_death/invadergreen_d2.png', id: 'invadergreen_d2' },
    { src: 'sprites/effects/animations/invader_green_death/invadergreen_d3.png', id: 'invadergreen_d3' },
    { src: 'sprites/effects/animations/invader_green_death/invadergreen_d4.png', id: 'invadergreen_d4' },
    { src: 'sprites/effects/animations/invader_green_death/invadergreen_d5.png', id: 'invadergreen_d5' },
    { src: 'sprites/effects/animations/invader_green_death/invadergreen_d6.png', id: 'invadergreen_d6' },
    { src: 'sprites/effects/animations/invader_green_death/invadergreen_d7.png', id: 'invadergreen_d7' },
    { src: 'sprites/effects/animations/invader_green_death/invadergreen_d8.png', id: 'invadergreen_d8' },
    { src: 'sprites/effects/animations/invader_green_death/invadergreen_d9.png', id: 'invadergreen_d9' },
    { src: 'sprites/effects/animations/invader_green_death/invadergreen_d10.png', id: 'invadergreen_d10' },
    { src: 'sprites/effects/animations/invader_green_death/invadergreen_d11.png', id: 'invadergreen_d11' },
    { src: 'sprites/effects/animations/invader_green_death/invadergreen_d12.png', id: 'invadergreen_d12' },
    { src: 'sprites/effects/animations/invader_green_death/invadergreen_d13.png', id: 'invadergreen_d13' },
    { src: 'sprites/effects/animations/invader_green_death/invadergreen_d14.png', id: 'invadergreen_d14' },
    { src: 'sprites/effects/animations/invader_green_death/invadergreen_d15.png', id: 'invadergreen_d15' },
    { src: 'sprites/effects/animations/invader_blue_death/invaderblue_d0.png', id: 'invaderblue_d0' },
    { src: 'sprites/effects/animations/invader_blue_death/invaderblue_d1.png', id: 'invaderblue_d1' },
    { src: 'sprites/effects/animations/invader_blue_death/invaderblue_d2.png', id: 'invaderblue_d2' },
    { src: 'sprites/effects/animations/invader_blue_death/invaderblue_d3.png', id: 'invaderblue_d3' },
    { src: 'sprites/effects/animations/invader_blue_death/invaderblue_d4.png', id: 'invaderblue_d4' },
    { src: 'sprites/effects/animations/invader_blue_death/invaderblue_d5.png', id: 'invaderblue_d5' },
    { src: 'sprites/effects/animations/invader_blue_death/invaderblue_d6.png', id: 'invaderblue_d6' },
    { src: 'sprites/effects/animations/invader_blue_death/invaderblue_d7.png', id: 'invaderblue_d7' },
    { src: 'sprites/effects/animations/invader_blue_death/invaderblue_d8.png', id: 'invaderblue_d8' },
    { src: 'sprites/effects/animations/invader_blue_death/invaderblue_d9.png', id: 'invaderblue_d9' },
    { src: 'sprites/effects/animations/invader_blue_death/invaderblue_d10.png', id: 'invaderblue_d10' },
    { src: 'sprites/effects/animations/invader_blue_death/invaderblue_d11.png', id: 'invaderblue_d11' },
    { src: 'sprites/effects/animations/invader_blue_death/invaderblue_d12.png', id: 'invaderblue_d12' },
    { src: 'sprites/effects/animations/invader_blue_death/invaderblue_d13.png', id: 'invaderblue_d13' },
    { src: 'sprites/effects/animations/invader_blue_death/invaderblue_d14.png', id: 'invaderblue_d14' },
    { src: 'sprites/effects/animations/invader_blue_death/invaderblue_d15.png', id: 'invaderblue_d15' },
    { src: 'sprites/effects/animations/invader_red_death/invaderred_d0.png', id: 'invaderred_d0' },
    { src: 'sprites/effects/animations/invader_red_death/invaderred_d1.png', id: 'invaderred_d1' },
    { src: 'sprites/effects/animations/invader_red_death/invaderred_d2.png', id: 'invaderred_d2' },
    { src: 'sprites/effects/animations/invader_red_death/invaderred_d3.png', id: 'invaderred_d3' },
    { src: 'sprites/effects/animations/invader_red_death/invaderred_d4.png', id: 'invaderred_d4' },
    { src: 'sprites/effects/animations/invader_red_death/invaderred_d5.png', id: 'invaderred_d5' },
    { src: 'sprites/effects/animations/invader_red_death/invaderred_d6.png', id: 'invaderred_d6' },
    { src: 'sprites/effects/animations/invader_red_death/invaderred_d7.png', id: 'invaderred_d7' },
    { src: 'sprites/effects/animations/invader_red_death/invaderred_d8.png', id: 'invaderred_d8' },
    { src: 'sprites/effects/animations/invader_red_death/invaderred_d9.png', id: 'invaderred_d9' },
    { src: 'sprites/effects/animations/invader_red_death/invaderred_d10.png', id: 'invaderred_d10' },
    { src: 'sprites/effects/animations/invader_red_death/invaderred_d11.png', id: 'invaderred_d11' },
    { src: 'sprites/effects/animations/invader_red_death/invaderred_d12.png', id: 'invaderred_d12' },
    { src: 'sprites/effects/animations/invader_red_death/invaderred_d13.png', id: 'invaderred_d13' },
    { src: 'sprites/effects/animations/invader_red_death/invaderred_d14.png', id: 'invaderred_d14' },
    { src: 'sprites/effects/animations/invader_red_death/invaderred_d15.png', id: 'invaderred_d15' },
    { src: 'sprites/effects/animations/invader_black_death/invaderblack_d0.png', id: 'invaderblack_d0' },
    { src: 'sprites/effects/animations/invader_black_death/invaderblack_d1.png', id: 'invaderblack_d1' },
    { src: 'sprites/effects/animations/invader_black_death/invaderblack_d2.png', id: 'invaderblack_d2' },
    { src: 'sprites/effects/animations/invader_black_death/invaderblack_d3.png', id: 'invaderblack_d3' },
    { src: 'sprites/effects/animations/invader_black_death/invaderblack_d4.png', id: 'invaderblack_d4' },
    { src: 'sprites/effects/animations/invader_black_death/invaderblack_d5.png', id: 'invaderblack_d5' },
    { src: 'sprites/effects/animations/invader_black_death/invaderblack_d6.png', id: 'invaderblack_d6' },
    { src: 'sprites/effects/animations/invader_black_death/invaderblack_d7.png', id: 'invaderblack_d7' },
    { src: 'sprites/effects/animations/invader_black_death/invaderblack_d8.png', id: 'invaderblack_d8' },
    { src: 'sprites/effects/animations/invader_black_death/invaderblack_d9.png', id: 'invaderblack_d9' },
    { src: 'sprites/effects/animations/invader_black_death/invaderblack_d10.png', id: 'invaderblack_d10' },
    { src: 'sprites/effects/animations/invader_black_death/invaderblack_d11.png', id: 'invaderblack_d11' },
    { src: 'sprites/effects/animations/invader_black_death/invaderblack_d12.png', id: 'invaderblack_d12' },
    { src: 'sprites/effects/animations/invader_black_death/invaderblack_d13.png', id: 'invaderblack_d13' },
    { src: 'sprites/effects/animations/invader_black_death/invaderblack_d14.png', id: 'invaderblack_d14' },
    { src: 'sprites/effects/animations/invader_black_death/invaderblack_d15.png', id: 'invaderblack_d15' },
    { src: 'sprites/effects/animations/smoke_normal/smoke_normal0.png', id: 'smoke_normal0' },
    { src: 'sprites/effects/animations/smoke_normal/smoke_normal1.png', id: 'smoke_normal1' },
    { src: 'sprites/effects/animations/smoke_normal/smoke_normal2.png', id: 'smoke_normal2' },
    { src: 'sprites/effects/animations/smoke_normal/smoke_normal3.png', id: 'smoke_normal3' },
    { src: 'sprites/effects/animations/smoke_normal/smoke_normal4.png', id: 'smoke_normal4' },
    { src: 'sprites/effects/animations/smoke_normal/smoke_normal5.png', id: 'smoke_normal5' },
    { src: 'sprites/effects/animations/smoke_normal/smoke_normal6.png', id: 'smoke_normal6' },
    { src: 'sprites/effects/animations/smoke_normal/smoke_normal7.png', id: 'smoke_normal7' },
    { src: 'sprites/effects/animations/smoke_normal/smoke_normal8.png', id: 'smoke_normal8' },
    { src: 'sprites/effects/animations/smoke_normal/smoke_normal9.png', id: 'smoke_normal9' },
    { src: 'sprites/effects/animations/smoke_normal/smoke_normal10.png', id: 'smoke_normal10' },
    { src: 'sprites/effects/animations/smoke_normal/smoke_normal11.png', id: 'smoke_normal11' },
    { src: 'sprites/effects/animations/smoke_normal/smoke_normal12.png', id: 'smoke_normal12' },
    { src: 'sprites/effects/animations/smoke_normal/smoke_normal13.png', id: 'smoke_normal13' },
    { src: 'sprites/effects/animations/smoke_normal/smoke_normal14.png', id: 'smoke_normal14' },
    { src: 'sprites/effects/animations/smoke_normal/smoke_normal15.png', id: 'smoke_normal15' },
    { src: 'sprites/effects/animations/smoke_normal/smoke_normal16.png', id: 'smoke_normal16' },
    { src: 'sprites/effects/animations/smoke_normal/smoke_normal17.png', id: 'smoke_normal17' },
    { src: 'sprites/effects/animations/smoke_normal/smoke_normal18.png', id: 'smoke_normal18' },
    { src: 'sprites/effects/animations/smoke_normal/smoke_normal19.png', id: 'smoke_normal19' },
    { src: 'sprites/effects/animations/smoke_small/smoke_small0.png', id: 'smoke_small0' },
    { src: 'sprites/effects/animations/smoke_small/smoke_small1.png', id: 'smoke_small1' },
    { src: 'sprites/effects/animations/smoke_small/smoke_small2.png', id: 'smoke_small2' },
    { src: 'sprites/effects/animations/smoke_small/smoke_small3.png', id: 'smoke_small3' },
    { src: 'sprites/effects/animations/smoke_small/smoke_small4.png', id: 'smoke_small4' },
    { src: 'sprites/effects/animations/smoke_small/smoke_small5.png', id: 'smoke_small5' },
    { src: 'sprites/effects/animations/smoke_small/smoke_small6.png', id: 'smoke_small6' },
    { src: 'sprites/effects/animations/smoke_small/smoke_small7.png', id: 'smoke_small7' },
    { src: 'sprites/effects/animations/smoke_small/smoke_small8.png', id: 'smoke_small8' },
    { src: 'sprites/effects/animations/smoke_small/smoke_small9.png', id: 'smoke_small9' },
    { src: 'sprites/effects/animations/smoke_small/smoke_small10.png', id: 'smoke_small10' },
    { src: 'sprites/effects/animations/smoke_small/smoke_small11.png', id: 'smoke_small11' },
    { src: 'sprites/effects/animations/smoke_small/smoke_small12.png', id: 'smoke_small12' },
    { src: 'sprites/effects/animations/smoke_small/smoke_small13.png', id: 'smoke_small13' },
    { src: 'sprites/effects/animations/smoke_small/smoke_small14.png', id: 'smoke_small14' },
    { src: 'sprites/effects/animations/smoke_small/smoke_small15.png', id: 'smoke_small15' },
    { src: 'sprites/effects/animations/smoke_small/smoke_small16.png', id: 'smoke_small16' },
    { src: 'sprites/effects/animations/smoke_small/smoke_small17.png', id: 'smoke_small17' },
    { src: 'sprites/effects/animations/smoke_small/smoke_small18.png', id: 'smoke_small18' },
    { src: 'sprites/effects/animations/smoke_small/smoke_small19.png', id: 'smoke_small19' },
    { src: 'sprites/effects/animations/explosion_normal/exp_normal0.png', id: 'exp_normal0' },
    { src: 'sprites/effects/animations/explosion_normal/exp_normal1.png', id: 'exp_normal1' },
    { src: 'sprites/effects/animations/explosion_normal/exp_normal2.png', id: 'exp_normal2' },
    { src: 'sprites/effects/animations/explosion_normal/exp_normal3.png', id: 'exp_normal3' },
    { src: 'sprites/effects/animations/explosion_normal/exp_normal4.png', id: 'exp_normal4' },
    { src: 'sprites/effects/animations/explosion_normal/exp_normal5.png', id: 'exp_normal5' },
    { src: 'sprites/effects/animations/explosion_normal/exp_normal6.png', id: 'exp_normal6' },
    { src: 'sprites/effects/animations/explosion_normal/exp_normal7.png', id: 'exp_normal7' },
    { src: 'sprites/effects/animations/explosion_normal/exp_normal8.png', id: 'exp_normal8' },
    { src: 'sprites/effects/animations/explosion_normal/exp_normal9.png', id: 'exp_normal9' },
    { src: 'sprites/effects/animations/explosion_normal/exp_normal10.png', id: 'exp_normal10' },
    { src: 'sprites/effects/animations/explosion_normal/exp_normal11.png', id: 'exp_normal11' },
    { src: 'sprites/effects/animations/explosion_normal/exp_normal12.png', id: 'exp_normal12' },
    { src: 'sprites/effects/animations/explosion_normal/exp_normal13.png', id: 'exp_normal13' },
    { src: 'sprites/effects/animations/explosion_normal/exp_normal14.png', id: 'exp_normal14' },
    { src: 'sprites/effects/animations/explosion_normal/exp_normal15.png', id: 'exp_normal15' },
    { src: 'sprites/effects/animations/explosion_normal/exp_normal16.png', id: 'exp_normal16' },
    { src: 'sprites/effects/animations/explosion_normal/exp_normal17.png', id: 'exp_normal17' },
    { src: 'sprites/effects/animations/explosion_normal/exp_normal18.png', id: 'exp_normal18' },
    { src: 'sprites/effects/animations/explosion_normal/exp_normal19.png', id: 'exp_normal19' },
    { src: 'sprites/effects/animations/explosion_big/exp_big0.png', id: 'exp_big0' },
    { src: 'sprites/effects/animations/explosion_big/exp_big1.png', id: 'exp_big1' },
    { src: 'sprites/effects/animations/explosion_big/exp_big2.png', id: 'exp_big2' },
    { src: 'sprites/effects/animations/explosion_big/exp_big3.png', id: 'exp_big3' },
    { src: 'sprites/effects/animations/explosion_big/exp_big4.png', id: 'exp_big4' },
    { src: 'sprites/effects/animations/explosion_big/exp_big5.png', id: 'exp_big5' },
    { src: 'sprites/effects/animations/explosion_big/exp_big6.png', id: 'exp_big6' },
    { src: 'sprites/effects/animations/explosion_big/exp_big7.png', id: 'exp_big7' },
    { src: 'sprites/effects/animations/explosion_big/exp_big8.png', id: 'exp_big8' },
    { src: 'sprites/effects/animations/explosion_big/exp_big9.png', id: 'exp_big9' },
    { src: 'sprites/effects/animations/explosion_big/exp_big10.png', id: 'exp_big10' },
    { src: 'sprites/effects/animations/explosion_big/exp_big11.png', id: 'exp_big11' },
    { src: 'sprites/effects/animations/explosion_big/exp_big12.png', id: 'exp_big12' },
    { src: 'sprites/effects/animations/explosion_big/exp_big13.png', id: 'exp_big13' },
    { src: 'sprites/effects/animations/explosion_big/exp_big14.png', id: 'exp_big14' },
    { src: 'sprites/effects/animations/explosion_big/exp_big15.png', id: 'exp_big15' },
    { src: 'sprites/effects/animations/explosion_big/exp_big16.png', id: 'exp_big16' },
    { src: 'sprites/effects/animations/explosion_big/exp_big17.png', id: 'exp_big17' },
    { src: 'sprites/effects/animations/explosion_big/exp_big18.png', id: 'exp_big18' },
    { src: 'sprites/effects/animations/explosion_big/exp_big19.png', id: 'exp_big19' },
    { src: 'sprites/effects/animations/coin/coin0.png', id: 'coinspin0' },
    { src: 'sprites/effects/animations/coin/coin1.png', id: 'coinspin1' },
    { src: 'sprites/effects/animations/coin/coin2.png', id: 'coinspin2' },
    { src: 'sprites/effects/animations/coin/coin3.png', id: 'coinspin3' },
    { src: 'sprites/effects/animations/coin/coin4.png', id: 'coinspin4' },
    { src: 'sprites/effects/animations/coin/coin5.png', id: 'coinspin5' },
    { src: 'sprites/effects/animations/coin/coin6.png', id: 'coinspin6' },
    { src: 'sprites/effects/animations/coin/coin7.png', id: 'coinspin7' },
];

const audio = [
    { src: 'soundfx/laser.ogg', id: 'laser_sound', type: 'audio/mpeg' },
    { src: 'soundfx/beep.ogg', id: 'beep_sound', type: 'audio/mpeg' },
    { src: 'soundfx/beep_red.ogg', id: 'beep_red_sound', type: 'audio/mpeg' },
    { src: 'soundfx/beep_orange.ogg', id: 'beep_orange_sound', type: 'audio/mpeg' },
    { src: 'soundfx/reload.ogg', id: 'reload_sound', type: 'audio/mpeg' },
    { src: 'soundfx/ready.ogg', id: 'ready_sound', type: 'audio/mpeg' },
    { src: 'soundfx/hit.ogg', id: 'hit_sound', type: 'audio/mpeg' },
    { src: 'soundfx/hitquad.ogg', id: 'hitquad_sound', type: 'audio/mpeg' },
    { src: 'soundfx/hitmetal.ogg', id: 'hitmetal_sound', type: 'audio/mpeg' },
    { src: 'soundfx/shielddown.ogg', id: 'shielddown_sound', type: 'audio/mpeg' },
    { src: 'soundfx/shieldup.ogg', id: 'shieldup_sound', type: 'audio/mpeg' },
    { src: 'soundfx/splash.ogg', id: 'splash_sound', type: 'audio/mpeg' },
    { src: 'soundfx/smoke.ogg', id: 'smoke_sound', type: 'audio/mpeg' },
    { src: 'soundfx/phase.ogg', id: 'phase_sound', type: 'audio/mpeg' },
    { src: 'soundfx/explosion.ogg', id: 'explosion_sound', type: 'audio/mpeg' },
    { src: 'soundfx/phew.ogg', id: 'phew_sound', type: 'audio/mpeg' },
    { src: 'soundfx/diver.ogg', id: 'diver_sound', type: 'audio/mpeg' },
    { src: 'soundfx/slowmo_charge.ogg', id: 'slowmo_charge_sound', type: 'audio/mpeg' },
    { src: 'soundfx/slowmo_empty.ogg', id: 'slowmo_empty_sound', type: 'audio/mpeg' },
    { src: 'soundfx/rain.ogg', id: 'rain_sound', type: 'audio/mpeg' },
    { src: 'soundfx/wind.ogg', id: 'wind_sound', type: 'audio/mpeg' },
    { src: 'soundfx/thunder0.ogg', id: 'thunder0sound', type: 'audio/mpeg' },
    { src: 'soundfx/thunder1.ogg', id: 'thunder1sound', type: 'audio/mpeg' },
    { src: 'soundfx/sand.ogg', id: 'sand_sound', type: 'audio/mpeg' },
    { src: 'soundfx/vortex.ogg', id: 'vortex_sound', type: 'audio/mpeg' },
    { src: 'soundfx/mirage.ogg', id: 'mirage_sound', type: 'audio/mpeg' },
    { src: 'soundfx/anxiety.ogg', id: 'anxiety_sound', type: 'audio/mpeg' },
    { src: 'soundfx/glitch.ogg', id: 'glitch_sound', type: 'audio/mpeg' },
    { src: 'soundfx/matrix.ogg', id: 'matrix_sound', type: 'audio/mpeg' },
    { src: 'soundfx/swoosh.ogg', id: 'swoosh_sound', type: 'audio/mpeg' },
    { src: 'soundfx/steam.ogg', id: 'steam_sound', type: 'audio/mpeg' },
    { src: 'soundfx/powerdown.ogg', id: 'powerdown_sound', type: 'audio/mpeg' },
    { src: 'soundfx/familiar_mg.ogg', id: 'familiar_mg_sound', type: 'audio/mpeg' },
    { src: 'soundfx/siren.ogg', id: 'siren_sound', type: 'audio/mpeg' },
    { src: 'soundfx/coin.ogg', id: 'coin_sound', type: 'audio/mpeg' },
    { src: 'soundfx/drain.ogg', id: 'drain_sound', type: 'audio/mpeg' },
    { src: 'soundfx/noammo.ogg', id: 'noammo_sound', type: 'audio/mpeg' },
    { src: 'soundfx/ray.ogg', id: 'ray_sound', type: 'audio/mpeg' },
    { src: 'soundfx/empscream.ogg', id: 'empscream_sound', type: 'audio/mpeg' },
    { src: 'soundfx/harvey.ogg', id: 'harvey_sound', type: 'audio/mpeg' },
    { src: 'soundfx/icu.ogg', id: 'icu_sound', type: 'audio/mpeg' },
    { src: 'soundfx/appear.ogg', id: 'appear_sound', type: 'audio/mpeg' },
    { src: 'soundfx/snipershot.ogg', id: 'snipershot_sound', type: 'audio/mpeg' },
    { src: 'soundfx/slowmo.ogg', id: 'slowmo_sound', type: 'audio/mpeg' },
    { src: 'music/musics0.ogg', id: 'musicstage0', type: 'audio/mpeg' },
    { src: 'music/musics1.ogg', id: 'musicstage1', type: 'audio/mpeg' },
    { src: 'music/musics2.ogg', id: 'musicstage2', type: 'audio/mpeg' },
    { src: 'music/musics3.ogg', id: 'musicstage3', type: 'audio/mpeg' },
    { src: 'music/musics4.ogg', id: 'musicstage4', type: 'audio/mpeg' },
    { src: 'music/musicb0.ogg', id: 'musicboss0', type: 'audio/mpeg' },
    { src: 'music/musicb1.ogg', id: 'musicboss1', type: 'audio/mpeg' },
    { src: 'music/musicb2.ogg', id: 'musicboss2', type: 'audio/mpeg' },
    { src: 'music/musicb3.ogg', id: 'musicboss3', type: 'audio/mpeg' },
    { src: 'music/musicb4.ogg', id: 'musicboss4', type: 'audio/mpeg' },
    { src: 'music/musicgameover.ogg', id: 'musicgameover', type: 'audio/mpeg' },
    { src: 'music/musicclock.ogg', id: 'musicclock', type: 'audio/mpeg' },
];

// load images
images.forEach((image) => {
    const imageElement = new Image();
    imageElement.src = `${ASSETS_PATH}/${image.src}`;
    imageElement.id = image.id;
    document.body.append(imageElement);
});

// load audio
audio.forEach((audio) => {
    const audioElement = new Audio();
    audioElement.src = `${ASSETS_PATH}/${audio.src}`;
    audioElement.id = audio.id;
    audioElement.type = audio.type;
    document.body.append(audioElement);
});

// load font
const style = document.createElement('style');
style.textContent = `
    @font-face {
        font-family: 'thaleahfatmedium';
        src: url('${ASSETS_PATH}/fonts/thaleahfat-webfont.woff2') format('woff2'),
             url('${ASSETS_PATH}/fonts/thaleahfat-webfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
`;
document.head.appendChild(style);
