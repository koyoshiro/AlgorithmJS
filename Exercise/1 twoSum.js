/**
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/two-sum
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var length = nums.length;
    var map = new Map();
    for(var i =0;i<length;i++){
        var diff = target - nums[i];
        if(map.has(diff)){
            return [map.get(diff),i];
        }
        map.set(nums[i],i);
    }
};

/**
 * 对于 TwoSum 问题，一个难点就是给的数组无序。
 * Map可以帮助我们处理无序数组相关的简单问题。
 */