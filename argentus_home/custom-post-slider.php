<?php
if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

/**
 * Elementor Custom Post Widget.
 *
 * Elementor widget that inserts an embbedable content into the page, from any given URL.
 *
 * @since 1.0.0
 */
class Duke_Elementor_custom_post_slider_Widget extends \Elementor\Widget_Base
{

	/**
	 * Get widget name.
	 *
	 * Retrieve Custom Post Slider widget name.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string Widget name.
	 */
	public function get_name()
	{
		return 'custom-post-slider';
	}

	/**
	 * Get widget title.
	 *
	 * Retrieve custom-post-slider widget title.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string Widget title.
	 */
	public function get_title()
	{
		return esc_html__('Custom Post Slider', 'custompost-slider-widget');
	}

	/**
	 * Get widget icon.
	 *
	 * Retrieve custom-post-slider widget icon.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string Widget icon.
	 */
	public function get_icon()
	{
		return 'eicon-slides';
	}


	public function get_style_depends()
	{

		wp_register_style('widget-style-1', plugins_url('assets/css/widget-style-1.css', __FILE__));

		return [
			'widget-style-1',
		];
	}


	/**
	 * Get custom help URL.
	 *
	 * Retrieve a URL where the user can get more information about the widget.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string Widget help URL.
	 */
	public function get_custom_help_url()
	{
		return 'https://essentialwebapps.com/category/elementor-tutorial/';
	}

	/**
	 * Get widget categories.
	 *
	 * Retrieve the list of categories the custom-post-slider widget belongs to.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return array Widget categories.
	 */
	public function get_categories()
	{
		return ['general'];
	}

	/**
	 * Get widget keywords.
	 *
	 * Retrieve the list of keywords the custom-post-slider widget belongs to.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return array Widget keywords.
	 */
	public function get_keywords()
	{
		return ['custom-post-slider', 'service', 'highlight', 'essential'];
	}



	/**
	 * Register custom-post-slider widget controls.
	 *
	 * Add input fields to allow the user to customize the widget settings.
	 *
	 * @since 1.0.0
	 * @access protected
	 */
	protected function register_controls()
	{
		// our control function code goes here.

		$post_types = get_post_types(array('public' => true));


		$this->start_controls_section(
			'content_section',
			[
				'label' => esc_html__('Content', 'custompost-slider-widget'),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'custom_post',
			[
				'label' => esc_html__('Custom Post ', 'custompost-slider-widget'),
				'type' => \Elementor\Controls_Manager::SELECT,
				'options' =>  $post_types,
				'default' => 'post'
			]
		);

		$this->add_responsive_control(
			'post_per_page',
			[
				'label' => esc_html__('Posts Per Page', 'custompost-slider-widget'),
				'type' => \Elementor\Controls_Manager::NUMBER,
				'min' => 1,
				'max' => 5,
				'step' => 1,
				'devices' => ['desktop', 'tablet', 'mobile'],
				'default' => 4,
			]
		);


		$this->add_control(
			'show_featured_image',
			[
				'label' => esc_html__('Show Featured Image', 'custompost-slider-widget'),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'return_value' => 'yes',
				'default' => 'yes',
			]
		);

		$this->add_control(
			'show_date',
			[
				'label' => esc_html__('Show Date', 'custompost-slider-widget'),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'return_value' => 'yes',
				'default' => 'yes',
			]
		);


		$this->add_control(
			'date_format',
			[
				'label' => esc_html__('Date Format', 'custompost-slider-widget'),
				'type' => \Elementor\Controls_Manager::SELECT,
				'options' => [
					'd m Y'  => esc_html__('dd mm yyyy', 'custompost-slider-widget'),
					'd m y'  => esc_html__('dd mm yy', 'custompost-slider-widget'),
					'd F Y' => esc_html__('Date Month Year', 'custompost-slider-widget'),
				],
				'condition' => [
					'show_date' => 'yes',
				],
				'default' => 'd F y',
			]
		);


		$this->add_control(
			'show_title',
			[
				'label' => esc_html__('Show Title', 'custompost-slider-widget'),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'return_value' => 'yes',
				'default' => 'yes',
			]
		);


		$this->add_control(
			'read_more',
			[
				'label' => esc_html__('Read More', 'custompost-slider-widget'),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'return_value' => 'yes',
				'default' => 'yes',
			]
		);


		$this->add_control(
			'read_more_text',
			[
				'label' => esc_html__('Read More Text', 'custompost-slider-widget'),
				'type' => \Elementor\Controls_Manager::TEXT,
				'condition' => [
					'read_more' => 'yes',
				],
				'default' => 'Read More',
			]
		);


		$this->end_controls_section();

		$this->start_controls_section(
			'navigation_section',
			[
				'label' => esc_html__('Navigation', 'custompost-slider-widget'),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'show_navigation',
			[
				'label' => esc_html__('Show Navigation', 'custompost-slider-widget'),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => esc_html__('Show', 'your-plugin'),
				'label_off' => esc_html__('Hide', 'your-plugin'),
				'return_value' => 'yes',
				'default' => 'yes',
			]
		);


		$this->end_controls_section();

		$this->start_controls_section(
			'Card',
			[
				'label'  => __(' Card Styling', 'custompost-slider-widget'),
				'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_responsive_control(
			'card_width',
			[
				'label' => esc_html__('Card Width', 'custompost-slider-widget'),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'size_units' => ['px', '%'],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 500,
						'step' => 5,
					],
					'%' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'default' => [
					'unit' => '%',
					'size' => 442,
				],
				'selectors' => [
					'{{WRAPPER}} .card' => 'max-width:  {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->add_responsive_control(
			'card_height ',
			[
				'label' => esc_html__('Card Height', 'custompost-slider-widget'),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'size_units' => ['px', '%'],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 700,
						'step' => 2,
					],
					'%' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'default' => [
					'unit' => 'px',
					'size' => 442,
				],
				'selectors' => [
					'{{WRAPPER}} .card' => 'min-height:  {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			[
				'name' => 'border',
				'label' => esc_html__('Border', 'custompost-slider-widget'),
				'selector' => '{{WRAPPER}} .card',
			]
		);

		$this->add_responsive_control(
			'border_radius',
			[
				'label' => esc_html__('Border Radius', 'custompost-slider-widget'),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => ['px', '%'],
				'selectors' => [
					'{{WRAPPER}} .card' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'slider_body',
			[
				'label'  => __('Slider Body Styling', 'custompost-slider-widget'),
				'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'slider_gradient',
			[
				'label' => esc_html__('Slider Gredient', 'custompost-slider-widget'),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'return_value' => 'yes',
				'default' => 'no',
			]
		);

		$this->add_control(
			'image_content_separator',
			[
				'label' => esc_html__('Image Content Separator', 'custompost-slider-widget'),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'return_value' => 'yes',
				'condition' => [
					'show_featured_image' => 'yes',
				],
				'default' => 'no',
			]
		);



		$this->add_control(
			'separator_color',
			[
				'label' => esc_html__('Image Content Separator Color', 'custompost-slider-widget'),
				'type' => \Elementor\Controls_Manager::COLOR,
				'condition' => [
					'image_content_separator' => 'yes'
				],
				'selectors' => [
					'{{WRAPPER}} .img_cnt_separator' => 'background-color: {{VALUE}};',
				],
			]
		);

		$this->add_responsive_control(
			'separator_width ',
			[
				'label' => esc_html__('Separator Width', 'custompost-slider-widget'),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'size_units' => ['px', '%'],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 1000,
						'step' => 5,
					],
					'%' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'default' => [
					'unit' => '%',
					'size' => 100,
				],
				'selectors' => [
					'{{WRAPPER}} .img_cnt_separator' => 'width: {{SIZE}}{{UNIT}};',
				],
				'condition' => [
					'image_content_separator' => 'yes'
				]
			]
		);

		$this->add_responsive_control(
			'separator_height ',
			[
				'label' => esc_html__('Separator Height', 'custompost-slider-widget'),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'size_units' => ['px', '%'],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 30,
						'step' => 2,
					],
					'%' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'default' => [
					'unit' => 'px',
					'size' => 7,
				],
				'selectors' => [
					'{{WRAPPER}} .img_cnt_separator' => 'height: {{SIZE}}{{UNIT}};',
				],
				'condition' => [
					'image_content_separator' => 'yes'
				]
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'content_style',
			[
				'label'  => __('Content Styling', 'custompost-slider-widget'),
				'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_responsive_control(
			'content_alignment',
			[
				'type' => \Elementor\Controls_Manager::CHOOSE,
				'label' => esc_html__('Content Alignment', 'custompost-slider-widget'),
				'options' => [
					'left' => [
						'title' => esc_html__('Left', 'custompost-slider-widget'),
						'icon' => 'eicon-text-align-left',
					],
					'center' => [
						'title' => esc_html__('Center', 'custompost-slider-widget'),
						'icon' => 'eicon-text-align-center',
					],
					'right' => [
						'title' => esc_html__('Right', 'custompost-slider-widget'),
						'icon' => 'eicon-text-align-right',
					],
				],
				'default' => 'center',
				'selectors' => [
					'{{WRAPPER}} .content-body' => 'text-align: {{VALUE}};',
				],

			]
		);

		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'date_typography',
				'label' => esc_html__('Date Typography', 'custompost-slider-widget'),
				'selector' => '{{WRAPPER}} .post_date',
				'condition' => [
					'show_date' => 'yes'
				],
			]
		);

		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'title_typography',
				'label' => esc_html__('Title Typography', 'custompost-slider-widget'),
				'selector' => '{{WRAPPER}} .post_title',
				'condition' => [
					'show_title' => 'yes'
				],
			]
		);

		$this->add_control(
			'title_color',
			[
				'label' => esc_html__('Title  Color', 'custompost-slider-widget'),
				'type' => \Elementor\Controls_Manager::COLOR,
				'condition' => [
					'show_title' => 'yes'
				],
				'selectors' => [
					'{{WRAPPER}} .post_title' => 'color: {{VALUE}};',
				],
			]
		);



		$this->add_control(
			'title_underline',
			[
				'label' => esc_html__('Title Underline', 'custompost-slider-widget'),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'return_value' => 'yes',
				'condition' => [
					'show_title' => 'yes',
				],
				'default' => 'yes',
			]
		);

		$this->add_control(
			'underline_color',
			[
				'label' => esc_html__('Under Line Color', 'custompost-slider-widget'),
				'type' => \Elementor\Controls_Manager::COLOR,
				'condition' => [
					'title_underline' => 'yes'
				],
				'selectors' => [
					'{{WRAPPER}} .underline' => 'background-color: {{VALUE}};',
				],
			]
		);

		$this->add_responsive_control(
			'content_border_radius',
			[
				'label' => esc_html__('Border Radius', 'custompost-slider-widget'),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => ['px', '%'],
				'selectors' => [
					'{{WRAPPER}} .content-body' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);


		$this->add_control(
			'read_more_text_color',
			[
				'label' => esc_html__('Read More Text Color', 'custompost-slider-widget'),
				'type' => \Elementor\Controls_Manager::COLOR,
				'condition' => [
					'read_more' => 'yes'
				],
				'selectors' => [
					'{{WRAPPER}} .read-more' => 'color: {{VALUE}};',
				],
			]
		);



		$this->end_controls_section();
	}

	/**
	 * Render custom-post-slider widget output on the frontend.
	 *
	 * Written in PHP and used to generate the final HTML.
	 *
	 * @since 1.0.0
	 * @access protected
	 */
	protected function render()
	{

		// get our input from the widget settings.
		$settings = $this->get_settings_for_display();

		// get the individual values of the input
		$custom_post = $settings['custom_post'];
		$show_date = $settings['show_date'];
		$date_format = $settings['date_format'];
		$show_title = $settings['show_title'];
		$read_more = $settings['read_more'];
		$read_more_text = $settings['read_more_text'];
		$show_featured_image = $settings['show_featured_image'];
		$show_navigation = $settings['show_navigation'];
		$slider_gradient = $settings['slider_gradient'];
		$post_per_page_desktop = (int)$settings['post_per_page'];
		$post_per_page_tablet = (int)$settings['post_per_page_tablet'];
		$post_per_page_mobile = (int)$settings['post_per_page_mobile'];
		$title_underline = $settings['title_underline'];

		$slider_id = "custom-post-slider-" . rand(000000, 999999);

		$posts = get_posts([
			'post_type' => $custom_post,
			'post_status' => 'publish',
			'numberposts' => -1
		]); ?>
		<!-- custom widget -->
		<div id="<?= $slider_id ?>" class="owl-carousel">
			<?php
			foreach ($posts as $post) :
			?>
				<div class="card">
					<?php if ($show_featured_image) : ?>
						<figure class="post-image">
							<img src="<?= get_the_post_thumbnail_url($post) ?>" alt="">
						</figure>
						<?php if (get_the_post_thumbnail_url($post)) : ?>
							<div class=" img_cnt_separator full-width"></div>
					<?php endif;
					endif; ?>
					<div class="content-body">
						<?php if ($show_date) : ?>
							<span class="post_date"><?php echo get_the_date($date_format); ?></span>
						<?php endif;
						if ($show_title) : ?>
							<h4 class="post_title"><?= get_the_title($post) ?></h4>
						<?php endif;
						if ($title_underline) : ?>
							<div class="underline"></div>
						<?php endif;
						if ($read_more) : ?>
							<a class="read-more" href="<?= get_the_permalink($post) ?>">
								<?= $read_more_text ?><span class="right-arrow"></span>
							</a>
						<?php endif; ?>
					</div>
				</div>
			<?php
			endforeach; ?>

		</div>
		<script>
			// jQuery(function() {
			jQuery('#<?= $slider_id ?>').owlCarousel({
				loop: true,
				margin: 40,
				nav: <?= ($show_navigation == 'yes') ? 'true' : 'false' ?>,
				responsive: {
					0: {
						<?= ($post_per_page_mobile) ? 'items: ' . $post_per_page_mobile : ''; ?>
					},
					700: {
						<?= ($post_per_page_tablet) ? 'items: ' . $post_per_page_tablet . ',' : ''; ?>
						margin: 20,
					},
					1000: {
						<?= ($post_per_page_desktop) ? 'items: ' . $post_per_page_desktop : ''; ?>
					}
				}
			})

			// })
		</script>

		<style>
			<?php if ($slider_gradient) : ?>
				/* conditional style */ 
				<?= "#" . $slider_id ?> .owl-stage-outer::after {
				content: "";
				position: absolute;
				background: linear-gradient(90deg, rgba(255, 255, 255, .1) 0%, rgba(95, 93, 94, 1) 100%);
				top: -2px;
				right: 0px;
				bottom: 0px;
				width: 12.8%;
				height: 97%;
			}

			<?php endif; ?>
		</style>
<?php
	}
}
