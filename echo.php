<?php

	$data = array(
		'ret' => true,
		'errcode' => 0,
		'errmsg' => 'success',
		'ver' => 1,
		'data' => array(
			'page' => 3 ,
			'travelers' => array(
				0 => array(
					'nickName' => "andycall",
					'userImg' => "..."
				),
				1 => array(
					'nickName' => "boolean93",
					'userImg' => "..."
				),
				2 => array(
					'nickName' => "zeroling",
					'userImg' => "..."
				),
				3 => array(
					'nickName' => "lecion",
					'userImg' => "..."
				)
			),
			'travelerCnt' => 48,
			'size' => 20
		)
	);

	echo json_encode($data);
?>